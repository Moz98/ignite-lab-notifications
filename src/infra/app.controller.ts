import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prima.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recepientId } = body;
    await this.prisma.notifications.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recepientId,
      },
    });
  }
}
