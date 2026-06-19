package com.restaurant.backend.entity;

import jakarta.persistence.*;

@Entity

@Table(name="billing")

public class Billing {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private double subtotal;

    private double gst;

    private double total;


    public Billing(){}


    public Long getId() {

        return id;

    }


    public void setId(Long id) {

        this.id = id;

    }


    public double getSubtotal() {

        return subtotal;

    }


    public void setSubtotal(double subtotal) {

        this.subtotal = subtotal;

    }


    public double getGst() {

        return gst;

    }


    public void setGst(double gst) {

        this.gst = gst;

    }


    public double getTotal() {

        return total;

    }


    public void setTotal(double total) {

        this.total = total;

    }

}