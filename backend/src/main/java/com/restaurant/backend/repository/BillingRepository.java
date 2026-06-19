package com.restaurant.backend.repository;

import com.restaurant.backend.entity.Billing;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BillingRepository
        extends JpaRepository<Billing, Long> {

}