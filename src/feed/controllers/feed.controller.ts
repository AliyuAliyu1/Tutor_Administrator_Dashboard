import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
  feedPostRepository: any;
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() post: FeedPost) {
    return this.feedService.createPost(post);
  }

  @Get()
  findAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPosts();
  }
}
