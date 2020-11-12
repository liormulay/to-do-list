package com.example.demo.controller;

import com.example.demo.entities.ToDoList;
import com.example.demo.repository.ToDoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    @Autowired
    ToDoListRepository toDoListRepository;

    @RequestMapping(value = "/api/list", method = RequestMethod.POST)
    public ResponseEntity<?> saveList(@RequestBody ToDoList toDoList) {
        toDoListRepository.save(toDoList);
        return ResponseEntity.ok().build();
    }
}
