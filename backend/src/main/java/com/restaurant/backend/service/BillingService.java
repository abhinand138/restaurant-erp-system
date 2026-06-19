package com.restaurant.backend.service;

import com.restaurant.backend.entity.Billing;

import com.restaurant.backend.repository.BillingRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class BillingService {

    @Autowired

    private BillingRepository repository;


    public Billing addBill(Billing billing){

        return repository.save(billing);

    }


    public List<Billing> getAllBills(){

        return repository.findAll();

    }

}