package com.restaurant.backend.service;

import com.restaurant.backend.entity.Order;

import com.restaurant.backend.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class OrderService {

    @Autowired

    private OrderRepository repository;


    public Order addOrder(Order order){

        return repository.save(order);

    }


    public List<Order> getAllOrders(){

        return repository.findAll();

    }

}