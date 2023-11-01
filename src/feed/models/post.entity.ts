import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity('tutor_admin')
export class FeedPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  body: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column()
  roles: string;

  @OneToMany(
    () => StudentProgress,
    (studentProgresss) => studentProgresss.userId,
  )
  studentProgresss: StudentProgress[];

  @OneToMany(() => Schedule, (schedules) => schedules.userId)
  schedules: Schedule[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

@Entity('student_progress')
export class StudentProgress {
  @PrimaryGeneratedColumn()
  progress_id: number;

  @Column()
  student_name: string;

  @Column()
  grade: number;

  @Column()
  date: Date;

  @Column()
  feedback: string;

  @ManyToOne(() => FeedPostEntity, (userId) => userId.studentProgresss)
  userId: FeedPostEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  pschedule_id: number;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  date: Date;

  @Column()
  subject: string;

  @ManyToOne(() => FeedPostEntity, (userId) => userId.schedules)
  userId: FeedPostEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
