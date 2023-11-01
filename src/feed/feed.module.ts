import { Module } from '@nestjs/common';
import { FeedService, FeedService2, FeedService3 } from './services/feed.service';
import {
  FeedController,
  schedulescontoller,
  studentProgress1,
} from './controllers/feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  FeedPostEntity,
  Schedule,
  StudentProgress,
} from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity, Schedule, StudentProgress]),
  ],
  providers: [FeedService, FeedService2, FeedService3],
  controllers: [FeedController, schedulescontoller, studentProgress1],
})
export class FeedModule {}
