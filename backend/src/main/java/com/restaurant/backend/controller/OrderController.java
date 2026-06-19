package com.restaurant.backend.controller;

import com.restaurant.backend.entity.Order;

import com.restaurant.backend.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")

@RestController

@RequestMapping("/api/orders")

public class OrderController {

    @Autowired

    private OrderService service;


    @PostMapping

    public Order addOrder(

            @RequestBody Order order){

        return service.addOrder(order);

    }


    @GetMapping

    public List<Order> getOrders(){

        return service.getAllOrders();

    }

}