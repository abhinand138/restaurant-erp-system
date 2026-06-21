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


    public RestaurantTable addTable(
            RestaurantTable table){

        return repository.save(table);

    }


    public List<RestaurantTable> getAllTables(){

        return repository.findAll();

    }


    public RestaurantTable updateTable(

            Long id,

            RestaurantTable table){

        RestaurantTable existing =

                repository.findById(id)

                .orElseThrow();


        existing.setTableName(

                table.getTableName()

        );


        existing.setCapacity(

                table.getCapacity()

        );


        existing.setStatus(

                table.getStatus()

        );


        return repository.save(existing);

    }


    public void deleteTable(

            Long id){

        repository.deleteById(id);

    }

}