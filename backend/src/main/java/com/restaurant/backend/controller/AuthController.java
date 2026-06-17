package com.restaurant.backend.controller;

import com.restaurant.backend.entity.User;
import com.restaurant.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/auth")

public class AuthController {

    @Autowired

    private UserService userService;


    @PostMapping("/register")

    public User registerUser(@RequestBody User user){

        return userService.createUser(user);

    }

}
