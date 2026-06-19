package com.restaurant.backend.service;

import com.restaurant.backend.entity.MenuItem;

import com.restaurant.backend.repository.MenuItemRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MenuItemService {

    @Autowired

    private MenuItemRepository repository;


    public MenuItem addMenuItem(MenuItem item){

        return repository.save(item);

    }


    public List<MenuItem> getAllMenuItems(){

        return repository.findAll();

    }

}