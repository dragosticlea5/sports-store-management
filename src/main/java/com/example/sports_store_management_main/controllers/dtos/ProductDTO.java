package com.example.sports_store_management_main.controllers.dtos;


import lombok.Data;

@Data
public class ProductDTO {

    private Long id;
    private String name;
    private Double price;
    private String category;
    private Integer stockQuantity;
}
