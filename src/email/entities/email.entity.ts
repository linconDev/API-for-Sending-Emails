import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'hosts',
})
export class HostEmail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  host: string;

  @Column()
  port: number;

  @Column({
    default: true,
  })
  secure: boolean;

  @Column()
  auth_user: string;

  @Column()
  auth_pass: string;

  @Column({
    default: new Date().toISOString(),
  })
  created_at: string;

  @Column({
    default: new Date().toISOString(),
  })
  updated_at: string;
}

@Entity({
  name: 'emails',
})
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HostEmail)
  @JoinColumn({ name: 'host_id' })
  host: HostEmail;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  subject: string;

  @Column()
  type_message: string;

  @Column()
  message: string;

  @Column({
    default: new Date().toISOString(),
  })
  created_at: string;

  @Column({
    default: new Date().toISOString(),
  })
  updated_at: string;
}
