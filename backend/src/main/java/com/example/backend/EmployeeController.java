package com.example.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeService service;

    @GetMapping("/employees")
    public List<Employee> getEmplyees() {
        return service.getAllEmployees();
    }

}
