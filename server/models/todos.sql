/*  create database for the todo */ 
CREATE DATABASE perntodo;

/* create and define the schema for the todo table */
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, /* create a unique key */
    description VARCHAR(255) /* limit description to 255 characters */ 
);