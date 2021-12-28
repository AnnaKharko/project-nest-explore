import { Field } from '@nestjs/graphql';

export class CreateUserInput {
  @Field(() => String)
  readonly first_name: string;

  @Field(() => String)
  readonly last_name: string;

  @Field(() => String)
  readonly email: string;

  @Field(() => String)
  readonly password: string;
}
