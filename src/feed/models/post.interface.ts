export interface FeedPost {
  id?: number;
  body?: string;
  username?: string;
  email?: string;
  password_hash?: string;
  roles?: string;
  studentProgresss?: studentProgress[];
  schedules?: schedule[];
  createdAt?: Date;
}

export interface studentProgress {
  progress_id?: number;
  student_name?: string;
  grade?: number;
  date?: Date;
  feedback?: string;
  user?: FeedPost;
  created_at?: Date;
}

export interface schedule {
  pschedule_id?: number;
  start_time?: string;
  end_time?: string;
  date?: Date;
  subject?: string;
  user?: FeedPost;
  created_at?: Date;
}
