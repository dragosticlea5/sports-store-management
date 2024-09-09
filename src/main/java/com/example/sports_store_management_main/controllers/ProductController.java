package com.example.sports_store_management_main.controllers;

import com.example.sports_store_management_main.controllers.dtos.ProductDTO;
import com.example.sports_store_management_main.persistence.entity.Product;
import com.example.sports_store_management_main.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<ProductDTO> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }


}
