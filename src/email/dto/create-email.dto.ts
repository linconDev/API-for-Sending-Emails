import { Trim } from 'class-sanitizer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateEmailDto {
  @IsNumber()
  @IsNotEmpty()
  readonly host_id: number;

  @IsEmail()
  @IsNotEmpty()
  @Trim()
  from: string;

  @IsEmail()
  @IsNotEmpty()
  @Trim()
  to: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  subject: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  type_message: string;

  @IsString()
  message: string;
}

export class CreateHostDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  host: string;

  @IsNumber()
  @IsNotEmpty()
  port: number;

  @IsBoolean()
  @IsNotEmpty()
  secure: boolean;

  @IsEmail()
  @IsNotEmpty()
  @Trim()
  auth_user: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  auth_pass: string;
}
