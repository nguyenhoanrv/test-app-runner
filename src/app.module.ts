import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'test-nest-app-db.cluster-cgfcarg5bzgl.us-east-1.rds.amazonaws.com',
      port: DB_PORT,
      username: 'admin',
      password: 'testtest',
      database: 'testdb',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
