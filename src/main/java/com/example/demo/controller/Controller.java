package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

//    @GetMapping(value = "/")
//    @RequestMapping(value="/",method= RequestMethod.GET)
    public String hello() {
        return "index.html";
    }

}
