import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
      autoLoadEntities: true,
      // entities: [User, StudentProgress, Schedule],
      synchronize: true,
      logging: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      extra: {
        ssl: {
          rejectUnauthorized: false, // Disable SSL certificate verification (use with caution)
          sslmode: 'require',
        },
      },
    }),

    FeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
