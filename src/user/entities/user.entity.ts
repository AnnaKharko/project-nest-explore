import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID } from '@nestjs/graphql';

export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field(() => String)
  first_name: string;

  @Column()
  @Field(() => String)
  last_name: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  password: string;
}
