package com.restaurant.backend.service;

import com.restaurant.backend.entity.RestaurantTable;

import com.restaurant.backend.repository.RestaurantTableRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class RestaurantTableService {

    @Autowired

    private RestaurantTableRepository repository;


    public RestaurantTable addTable(RestaurantTable table){

        return repository.save(table);

    }


    public List<RestaurantTable> getAllTables(){

        return repository.findAll();

    }

}