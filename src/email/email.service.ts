import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Email, HostEmail } from './entities/email.entity';
import { Repository } from 'typeorm';
import { CreateEmailDto, CreateHostDto } from './dto/create-email.dto';
import { LoggerService } from 'src/common/logger/logger.service';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(HostEmail)
    private hostRepository: Repository<HostEmail>,
    @InjectRepository(Email)
    private emailReposiry: Repository<Email>,
    private logger: LoggerService,
  ) {}

  async createHost(body: CreateHostDto) {
    const create_host = this.hostRepository.create(body);
    try {
      const save_host = await this.hostRepository.save(create_host);
      this.logger.log(`New host registered: ${save_host.id}`);
      return save_host;
    } catch (error) {
      this.logger.error(`Error saving new host: ${error.message}`, error.stack);
      throw new BadRequestException('Failed to save new host.');
    }
  }

  async sendEmail(body: CreateEmailDto) {
    try {
      const host = await this.hostRepository.findOneBy({ id: body.host_id });
      const transporter = nodemailer.createTransport({
        host: host.host,
        port: host.port,
        secure: host.secure,
        auth: {
          user: host.auth_user,
          pass: host.auth_pass,
        },
      });
      const configEmail: any = {
        from: body.from,
        to: body.to,
        subject: body.subject,
      };
      if (body.type_message === 'text') configEmail.text = body.message;
      if (body.type_message === 'html') configEmail.html = body.message;

      const create_email = this.emailReposiry.create({
        host: host,
        from: body.from,
        to: body.to,
        subject: body.subject,
        type_message: body.type_message,
        message: body.message,
      });
      await this.emailReposiry.save(create_email);

      return transporter.sendMail(configEmail, (error, info) => {
        if (error) {
          throw new Error('Erro ao enviar email');
        } else {
          console.log('Email enviado:', info.response);
          return 'Email enviado com sucesso!';
        }
      });
    } catch (error) {
      this.logger.error(`Fail to send Email: ${error.message}`, error.stack);
      throw new BadRequestException('Fail to send Email.');
    }
  }
}
