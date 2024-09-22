package com.example.sports_store_management_main.mappers;

import com.example.sports_store_management_main.controllers.dtos.ProductDTO;
import com.example.sports_store_management_main.persistence.entity.Category;
import com.example.sports_store_management_main.persistence.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {
    public ProductDTO toDTO(Product product) {
        if (product == null) {
            return null;
        }
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setPrice(product.getPrice());
        dto.setCategoryId(product.getCategory().getId());
        return dto;
    }

    public Product toEntity(ProductDTO productDTO) {
        if (productDTO == null) {
            return null;
        }
        Product product = new Product();
        product.setId(productDTO.getId());
        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());
        // Map other fields
        Category category = new Category();
        category.setId(productDTO.getCategoryId());
        product.setCategory(category);
        return product;

    }
}
