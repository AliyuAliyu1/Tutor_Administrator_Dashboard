import { Injectable } from '@nestjs/common';
import {
  FeedPostEntity,
  Schedule,
  StudentProgress,
} from '../models/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPost, schedule, studentProgress } from '../models/post.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}
  createPost(feedPost: FeedPost): Observable<FeedPost> {
    return from(this.feedPostRepository.save(feedPost));
  }

  findAllPosts(): Observable<FeedPost[]> {
    return from(this.feedPostRepository.find());
  }

  updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}

@Injectable()
export class FeedService2 {
  constructor(
    @InjectRepository(Schedule)
    private readonly feedPostRepository: Repository<Schedule>,
  ) {}
  createPost(feedPost: schedule): Observable<schedule> {
    return from(this.feedPostRepository.save(feedPost));
  }

  findAllPosts(): Observable<schedule[]> {
    return from(this.feedPostRepository.find());
  }

  updatePost(id: number, feedPost: schedule): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}

@Injectable()
export class FeedService3 {
  constructor(
    @InjectRepository(StudentProgress)
    private readonly feedPostRepository: Repository<StudentProgress>,
  ) {}
  createPost(feedPost: studentProgress): Observable<studentProgress> {
    return from(this.feedPostRepository.save(feedPost));
  }

  findAllPosts(): Observable<studentProgress[]> {
    return from(this.feedPostRepository.find());
  }

  updatePost(id: number, feedPost: studentProgress): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}
