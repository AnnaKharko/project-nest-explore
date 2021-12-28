import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, ID } from '@nestjs/graphql';

export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  readonly id: string;

  @Field(() => String)
  readonly first_name?: string;

  @Field(() => String)
  readonly last_name?: string;

  @Field(() => String)
  readonly email?: string;

  @Field(() => String)
  readonly password?: string;
}
