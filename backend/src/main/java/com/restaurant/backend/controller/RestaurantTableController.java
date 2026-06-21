package com.restaurant.backend.controller;

import com.restaurant.backend.entity.RestaurantTable;

import com.restaurant.backend.service.RestaurantTableService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")

@RestController

@RequestMapping("/api/tables")

public class RestaurantTableController {

    @Autowired

    private RestaurantTableService service;


    @PostMapping

    public RestaurantTable addTable(

            @RequestBody RestaurantTable table){

        return service.addTable(table);

    }


    @GetMapping

    public List<RestaurantTable> getAllTables(){

        return service.getAllTables();

    }

    @GetMapping("/count")

     public long getTableCount(){

    return service.getAllTables().size();

}

@PutMapping("/{id}")

public RestaurantTable updateTable(

        @PathVariable Long id,

        @RequestBody RestaurantTable table){

    return service.updateTable(

            id,

            table

    );

}


@DeleteMapping("/{id}")

public void deleteTable(

        @PathVariable Long id){

    service.deleteTable(id);

}

}