CREATE TABLE "student_progress" (
  "progress_id" integer,
  "grade" integer,
  "date" date,
  "tutor_userID" "int(Foreign key, refrences tutor_user)",
  "student_name" varchar,
  "feedback" TEXT,
  "created_at" timestamp
);

CREATE TABLE "tutor_user" (
  "user_id" integer PRIMARY KEY,
  "username" varchar,
  "email" varchar,
  "password_hash" varchar,
  "role" varchar,
  "created_at" timestamp
);

CREATE TABLE "schedules" (
  "pschedule_id" integer PRIMARY KEY,
  "start_time" varchar,
  "date" date,
  "tutor_userID" "int(Foreign key, refrences tutor_user)",
  "end_time" varchar,
  "subject" varchar,
  "created_at" timestamp
);

ALTER TABLE "schedules" ADD FOREIGN KEY ("tutor_userID") REFERENCES "tutor_user" ("user_id");

ALTER TABLE "student_progress" ADD FOREIGN KEY ("tutor_userID") REFERENCES "tutor_user" ("user_id");
