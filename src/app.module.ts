import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';
import { AppGateway } from './app/app.gateway';
import config from '../ormconfig';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(config),
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '../..', 'client/dist'),
      }),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})

export class AppModule {}
