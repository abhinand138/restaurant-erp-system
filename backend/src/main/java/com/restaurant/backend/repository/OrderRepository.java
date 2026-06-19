package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository

extends JpaRepository<Order,Long>{

}