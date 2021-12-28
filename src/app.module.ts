import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: 'src/schema.gql' }),
    UserModule,
  ],
  providers: [AppService],
})
export class AppModule {}
