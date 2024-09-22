package com.example.sports_store_management_main.controllers.dtos;
import lombok.Data;

@Data
public class ReviewDTO {
    private Long id;
    private String comment;
    private Integer rating;
    private Long productId; // Reference to the product
    private Long customerId; // Reference to the customer
}
