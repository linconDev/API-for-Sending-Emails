import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email, HostEmail } from './entities/email.entity';
import { LoggerService } from 'src/common/logger/logger.service';

@Module({
  imports: [TypeOrmModule.forFeature([HostEmail, Email])],
  controllers: [EmailController],
  providers: [EmailService, LoggerService],
})
export class EmailModule {}
