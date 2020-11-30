package com.example.demo.controller;

import com.example.demo.entities.ToDoList;
import com.example.demo.repository.ToDoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.function.Supplier;

@RestController
public class Controller {

    @Autowired
    ToDoListRepository toDoListRepository;

    @RequestMapping(value = "/api/list", method = RequestMethod.POST)
    public ResponseEntity<?> saveList(@RequestBody ToDoList toDoList) {
        toDoListRepository.save(toDoList);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/api/list", method = RequestMethod.PUT)
    public ResponseEntity<?> editList(@RequestBody ToDoList toDoList) throws Throwable {
        ToDoList originalList = toDoListRepository.findById(toDoList.getId()).orElseThrow((Supplier<Throwable>) IllegalArgumentException::new);
        originalList.setList(toDoList.getList());
        toDoListRepository.save(originalList);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/api/lists", method = RequestMethod.GET)
    public List<ToDoList> getLists() {
        return toDoListRepository.findAll();
    }

    @RequestMapping(value = "/api/list", method = RequestMethod.GET)
    public ToDoList getList(@RequestParam String id) throws Throwable {
        return toDoListRepository.findById(id).orElseThrow((Supplier<Throwable>) IllegalArgumentException::new);
    }
}
