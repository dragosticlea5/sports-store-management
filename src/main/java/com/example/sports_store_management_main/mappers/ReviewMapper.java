package com.example.sports_store_management_main.mappers;

import com.example.sports_store_management_main.controllers.dtos.ReviewDTO;
import com.example.sports_store_management_main.persistence.entity.Customer;
import com.example.sports_store_management_main.persistence.entity.Product;
import com.example.sports_store_management_main.persistence.entity.Review;
import org.springframework.stereotype.Component;

@Component
public class ReviewMapper {

    public ReviewDTO toDTO(Review review) {
        if (review == null) {
            return null;
        }
        ReviewDTO dto = new ReviewDTO();
        dto.setId(review.getId());
        dto.setComment(review.getComment());
        dto.setRating(review.getRating());
        dto.setProductId(review.getProduct().getId());
        dto.setCustomerId(review.getCustomer().getId());
        return dto;
    }

    public Review toEntity(ReviewDTO reviewDTO) {
        if (reviewDTO == null) {
            return null;
        }
        Review review = new Review();
        review.setId(reviewDTO.getId());
        review.setComment(reviewDTO.getComment());
        review.setRating(reviewDTO.getRating());
        Product product = new Product();
        product.setId(reviewDTO.getProductId());
        review.setProduct(product);
        Customer customer = new Customer();
        customer.setId(reviewDTO.getCustomerId());
        review.setCustomer(customer);
        return review;
    }
}
