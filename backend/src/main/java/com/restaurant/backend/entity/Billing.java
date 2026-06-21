package com.restaurant.backend.entity;

import jakarta.persistence.*;

@Entity

@Table(name="billing")

public class Billing {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String foodName;

    private String tableName;

    private int quantity;

    private double subtotal;

    private double gst;

    private double total;


    public Billing(){}


    public Long getId() {

        return id;

    }


    public void setId(Long id) {

        this.id = id;

    }


    public String getFoodName() {

        return foodName;

    }


    public void setFoodName(String foodName) {

        this.foodName = foodName;

    }


    public String getTableName() {

        return tableName;

    }


    public void setTableName(String tableName) {

        this.tableName = tableName;

    }


    public int getQuantity() {

        return quantity;

    }


    public void setQuantity(int quantity) {

        this.quantity = quantity;

    }


    public double getSubtotal() {

        return subtotal;

    }


    public void setSubtotal(double subtotal) {

        this.subtotal = subtotal;

    }


    public double getGst() {

        return gst;

    }


    public void setGst(double gst) {

        this.gst = gst;

    }


    public double getTotal() {

        return total;

    }


    public void setTotal(double total) {

        this.total = total;

    }

}