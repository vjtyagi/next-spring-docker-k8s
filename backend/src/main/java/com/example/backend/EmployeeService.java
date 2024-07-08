package com.example.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    @Value("${spring.datasource.url}")
    private String datasourceUrl;

    @PostConstruct
    public void init() {
        if (repository.count() == 0) {
            repository.save(new Employee("John Doe", "Developer"));
            repository.save(new Employee("Jane Smith", "Manager"));
        }
        System.out.println("Datasource url " + datasourceUrl);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

}
