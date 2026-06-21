package com.restaurant.backend.controller;

import com.restaurant.backend.entity.Billing;

import com.restaurant.backend.service.BillingService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")

@RestController

@RequestMapping("/api/billing")

public class BillingController {

    @Autowired

    private BillingService service;


    @PostMapping

    public Billing addBill(

            @RequestBody Billing billing){

        return service.addBill(billing);

    }


    @GetMapping

    public List<Billing> getBills(){

        return service.getAllBills();

    }

    @GetMapping("/revenue")

    public double getRevenue(){

    return service.getAllBills()

            .stream()

            .mapToDouble(Billing::getTotal)

            .sum();

}

@GetMapping("/count")

public long getBillCount(){

    return service.getAllBills().size();

}

}