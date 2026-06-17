package com.restaurant.backend.repository;

import com.restaurant.backend.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long>{

}
