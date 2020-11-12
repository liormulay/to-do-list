package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Document("lists")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(builderMethodName = "toDoList")
public class ToDoList {

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date dateTime;
    List<String> list;
}
