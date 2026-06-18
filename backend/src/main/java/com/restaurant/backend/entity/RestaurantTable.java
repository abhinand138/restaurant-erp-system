package com.restaurant.backend.entity;

import jakarta.persistence.*;

@Entity

@Table(name = "restaurant_tables")

public class RestaurantTable {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String tableName;

    private int capacity;

    private String status;


    public RestaurantTable() {}


    public Long getId() {

        return id;

    }


    public void setId(Long id) {

        this.id = id;

    }


    public String getTableName() {

        return tableName;

    }


    public void setTableName(String tableName) {

        this.tableName = tableName;

    }


    public int getCapacity() {

        return capacity;

    }


    public void setCapacity(int capacity) {

        this.capacity = capacity;

    }


    public String getStatus() {

        return status;

    }


    public void setStatus(String status) {

        this.status = status;

    }

}