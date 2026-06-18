package com.restaurant.backend.service;

import com.restaurant.backend.entity.User;
import com.restaurant.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User createUser(User user){

        return userRepository.save(user);

    }


    public User loginUser(String email, String password){

        User user = userRepository
                .findByEmail(email)
                .orElse(null);


        if(user == null){

            return null;

        }


        if(!user.getPassword().equals(password)){

            return null;

        }


        return user;

    }

}