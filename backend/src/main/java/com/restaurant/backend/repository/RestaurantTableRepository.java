package com.restaurant.backend.repository;

import com.restaurant.backend.entity.RestaurantTable;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantTableRepository

        extends JpaRepository<RestaurantTable,Long>{

}
