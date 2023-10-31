
DROP TABLE IF EXISTS tutor_user, student_progress, schedules CASCADE;

CREATE TABLE tutor_user (
  user_id SERIAL PRIMARY KEY,
  username  varchar(255) DEFAULT NULL,
  email  varchar(255) DEFAULT NULL,
  password_hash  varchar(255) DEFAULT NULL,
  roles  varchar(255) DEFAULT NULL,

   created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- INSERT INTO tutor_user
-- ( username,email , password_hash,roles) 
-- VALUES
--   ('John', 'Doe','john@example.com', 'full time'),
--   ('Jane', 'Smith',  'jane@example.com', 'part time'),
--   ('Bob', 'Johnson',  'bob@example.com', 'full time');


CREATE TABLE student_progress (
  progress_id SERIAL PRIMARY KEY,
  student_name  varchar(255) DEFAULT NULL,
  grade  int DEFAULT NULL,
  date DATE NOT NULL,
  feedback varchar(255) DEFAULT NULL,
  tutor_userID int,

   created_at TIMESTAMP DEFAULT NOW() NOT NULL
 
);

-- INSERT INTO student_progress
-- ( student_name,grade, date,feedback) 
-- VALUES
--   ('John', 5,'2023-10-31', 'full time'),
--   ('Jane', 6,  '2023-10-30', 'Keep up the good work!'),
--   ('Bob', 7,  '2023-10-29', 'full time');


CREATE TABLE schedules (
  pschedule_id SERIAL PRIMARY KEY,
  start_time varchar(255) DEFAULT NULL,
  end_time varchar(255) DEFAULT NULL,
  subject varchar(255) DEFAULT NULL,   
  date DATE NOT NULL,
  tutor_userID int,

   created_at TIMESTAMP DEFAULT NOW() NOT NULL

);

-- INSERT INTO schedules
-- ( start_time,end_time, date,subject) 
-- VALUES
--   ('John', 'John','2023-10-31', 'full time'),
--   ('Jane', 'John',  '2023-10-30', 'Keep up the good work!'),
--   ('Bob', 'John',  '2023-10-29', 'full time');


ALTER TABLE student_progress
ADD CONSTRAINT tutor_userID_fk FOREIGN KEY (tutor_userID) REFERENCES tutor_user(user_id);

ALTER TABLE schedules
ADD CONSTRAINT tutor_userID_fk FOREIGN KEY (tutor_userID) REFERENCES tutor_user(user_id);

