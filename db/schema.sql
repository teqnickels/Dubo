DROP TABLE IF EXISTS todolist;

CREATE TABLE todolist (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NULL,
  complete BOOLEAN DEFAULT false,
  priority SERIAL 
);
