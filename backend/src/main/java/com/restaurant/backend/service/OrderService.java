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


    public Order updateOrder(

            Long id,

            Order order){

        Order existing =

                repository.findById(id)

                .orElseThrow();


        existing.setFoodName(

                order.getFoodName()

        );


        existing.setTableName(

                order.getTableName()

        );


        existing.setQuantity(

                order.getQuantity()

        );


        existing.setStatus(

                order.getStatus()

        );


        return repository.save(existing);

    }


    public void deleteOrder(

            Long id){

        repository.deleteById(id);

    }

}