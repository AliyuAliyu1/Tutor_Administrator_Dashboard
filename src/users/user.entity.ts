// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { StudentProgress } from '../student-progress/student-progress.entity';
// import { Schedule } from '../schedules/schedule.entity';

// @Entity('tutor_user')
// export class User {
//     @PrimaryGeneratedColumn()
//     user_id: number;

//     @Column()
//     username: string;

//     @Column()
//     email: string;

//     @Column()
//     password_hash: string;

//     @Column()
//     roles: string;

//     @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//     created_at: Date;

//     @OneToMany(() => StudentProgress, (studentProgress) => studentProgress.user)
//     studentProgress: StudentProgress[];

//     @OneToMany(() => Schedule, (schedule) => schedule.user)
//     schedules: Schedule[];
// }
