// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { User } from '../users/user.entity';

// @Entity('schedules')
// export class Schedule {
//   @PrimaryGeneratedColumn()
//   pschedule_id: number;

//   @Column()
//   start_time: string;

//   @Column()
//   end_time: string;

//   @Column()
//   date: Date;

//   @Column()
//   subject: string;

//   @ManyToOne(() => User, (user) => user.schedules)
//   user: User;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   created_at: Date;
// }
