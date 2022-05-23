import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisClientOptions } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config';
import { UserModule } from './user/user.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: DB_HOST,
    //   port: DB_PORT,
    //   username: DB_USER,
    //   password: DB_PASS,
    //   database: DB_NAME,
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    // CacheModule.register<RedisClientOptions>({
    //   store: redisStore,
    //   url: 'redis://clustercfg.test-redis.p49wgc.memorydb.us-east-1.amazonaws.com:6379',
    //   isGlobal: true,
    // }),
    // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
