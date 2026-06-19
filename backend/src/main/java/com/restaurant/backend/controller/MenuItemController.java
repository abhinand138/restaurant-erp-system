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

}