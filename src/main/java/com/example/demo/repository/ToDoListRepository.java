package com.example.demo.repository;

import com.example.demo.entities.ToDoList;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ToDoListRepository extends MongoRepository<ToDoList, String> {
}
