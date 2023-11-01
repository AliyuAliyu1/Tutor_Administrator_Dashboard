import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  FeedService,
  FeedService2,
  FeedService3,
} from '../services/feed.service';
import { FeedPost, schedule, studentProgress } from '../models/post.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('tutor_admin')
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

  @Put(':id')
  update(
    @Param() id: number,
    @Body() post: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, post);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}

@Controller('tutor_admin/schedules')
export class schedulescontoller {
  feedPostRepository: any;
  constructor(private feedService: FeedService2) {}

  @Post()
  create(@Body() post: schedule) {
    return this.feedService.createPost(post);
  }

  @Get()
  findAll(): Observable<schedule[]> {
    return this.feedService.findAllPosts();
  }

  @Put(':id')
  update(
    @Param() id: number,
    @Body() post: schedule,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, post);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}

@Controller('tutor_admin/studentProgress')
export class studentProgress1 {
  feedPostRepository: any;
  constructor(private feedService: FeedService3) {}

  @Post()
  create(@Body() post: studentProgress) {
    return this.feedService.createPost(post);
  }

  @Get()
  findAll(): Observable<studentProgress[]> {
    return this.feedService.findAllPosts();
  }

  @Put(':id')
  update(
    @Param() id: number,
    @Body() post: studentProgress,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, post);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
