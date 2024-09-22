package com.example.sports_store_management_main.persistence.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Double price;

    @OneToMany(mappedBy = "product")
    private List<Review> reviews;
    //= new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;



    
}
