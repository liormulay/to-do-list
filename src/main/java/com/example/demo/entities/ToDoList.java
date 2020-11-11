package com.example.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document("lists")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(builderMethodName = "toDoList")
public class ToDoList {
    @Id
    private Date date;
    List<String> list;
}
