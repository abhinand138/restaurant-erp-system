package com.restaurant.backend.controller;

import com.restaurant.backend.dto.LoginRequest;
import com.restaurant.backend.dto.LoginResponse;
import com.restaurant.backend.entity.User;
import com.restaurant.backend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")

@RestController

@RequestMapping("/api/auth")

public class AuthController {

    @Autowired

    private UserService userService;


    @PostMapping("/register")

    public User registerUser(@RequestBody User user){

        return userService.createUser(user);

    }


    @PostMapping("/login")

    public LoginResponse login(@RequestBody LoginRequest request){

        User user = userService.loginUser(
                request.getEmail(),
                request.getPassword()
        );

        LoginResponse response = new LoginResponse();

        if(user == null){

            response.setSuccess(false);

            response.setMessage("Invalid credentials");

            return response;

        }

        response.setSuccess(true);

        response.setMessage("Login successful");

        response.setRole(user.getRole());

        return response;

    }

}