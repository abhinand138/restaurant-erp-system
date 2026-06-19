package com.restaurant.backend.entity;

import jakarta.persistence.*;

@Entity

@Table(name = "orders")

public class Order {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String tableName;

    private String foodName;

    private int quantity;

    private String status;


    public Order(){}


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


    public String getFoodName() {

        return foodName;

    }


    public void setFoodName(String foodName) {

        this.foodName = foodName;

    }


    public int getQuantity() {

        return quantity;

    }


    public void setQuantity(int quantity) {

        this.quantity = quantity;

    }


    public String getStatus() {

        return status;

    }


    public void setStatus(String status) {

        this.status = status;

    }

}