CREATE DATABASE perntodo;

/* define the schema for the todo table */
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);