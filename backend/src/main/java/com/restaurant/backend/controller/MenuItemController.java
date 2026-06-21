package com.restaurant.backend.controller;

import com.restaurant.backend.entity.MenuItem;

import com.restaurant.backend.service.MenuItemService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")

@RestController

@RequestMapping("/api/menu")

public class MenuItemController {

    @Autowired

    private MenuItemService service;


    @PostMapping

    public MenuItem addMenu(

            @RequestBody MenuItem item){

        return service.addMenuItem(item);

    }


    @GetMapping

    public List<MenuItem> getMenu(){

        return service.getAllMenuItems();

    }

    @GetMapping("/count")

    public long getMenuCount(){

    return service.getAllMenuItems().size();

}

@PutMapping("/{id}")

public MenuItem updateMenu(

        @PathVariable Long id,

        @RequestBody MenuItem item){

    return service.updateMenuItem(

            id,

            item

    );

}


@DeleteMapping("/{id}")

public void deleteMenu(

        @PathVariable Long id){

    service.deleteMenuItem(id);

}

}