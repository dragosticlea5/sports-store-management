package com.example.sports_store_management_main.persistence.repositories;

import com.example.sports_store_management_main.persistence.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    //Query to find products by category
    @Query("SELECT p FROM Product p WHERE p.category = ?1")
    List<Product> findProductsByCategory(String category);

    //Query to find products with a price below a value
    @Query("SELECT p FROM Product p WHERE p.price <= ?1")
    List<Product> findProductsCheaperThan(Double price);

    List<Product> findByCategoryId(Long categoryId);
}
