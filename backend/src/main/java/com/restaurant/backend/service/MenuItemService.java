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


    public MenuItem updateMenuItem(

            Long id,

            MenuItem item){

        MenuItem existing =

                repository.findById(id)

                .orElseThrow();


        existing.setName(

                item.getName()

        );


        existing.setPrice(

                item.getPrice()

        );


        existing.setCategory(

                item.getCategory()

        );


        return repository.save(existing);

    }


    public void deleteMenuItem(

            Long id){

        repository.deleteById(id);

    }

}