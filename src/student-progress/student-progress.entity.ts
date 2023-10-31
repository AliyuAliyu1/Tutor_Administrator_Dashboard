// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { User } from '../users/user.entity';

// @Entity('student_progress')
// export class StudentProgress {
//   @PrimaryGeneratedColumn()
//   progress_id: number;

//   @Column()
//   student_name: string;

//   @Column()
//   grade: number;

//   @Column()
//   date: Date;

//   @Column()
//   feedback: string;

//   @ManyToOne(() => User, (user) => user.studentProgress)
//   user: User;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   created_at: Date;
// }
