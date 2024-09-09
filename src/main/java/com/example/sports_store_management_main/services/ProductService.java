package com.example.sports_store_management_main.services;

import com.example.sports_store_management_main.controllers.dtos.ProductDTO;
import com.example.sports_store_management_main.exceptions.ProductNotFoundException;
import com.example.sports_store_management_main.persistence.entity.Product;
import com.example.sports_store_management_main.persistence.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return (List<Product>) productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product with id " + id + " not found"));
    }

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

}
