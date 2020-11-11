package com.example.demo.entities;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;

public interface ToDoListRepository extends MongoRepository<ToDoList, Date> {
}
