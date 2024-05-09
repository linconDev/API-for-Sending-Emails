import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto, CreateHostDto } from './dto/create-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('host/create')
  async createHost(@Body() body: CreateHostDto) {
    return this.emailService.createHost(body);
  }

  @Post('send')
  async sendEmail(@Body() body: CreateEmailDto) {
    return this.emailService.sendEmail(body);
  }
}
