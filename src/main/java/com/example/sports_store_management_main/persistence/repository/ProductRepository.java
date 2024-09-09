package com.example.sports_store_management_main.persistence.repository;

import com.example.sports_store_management_main.persistence.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    //Query to find products by category
    @Query("SELECT p FROM Product p WHERE p.category = ?1")
    List<Product> findProductsByCategory(String category);

    //Query to find products with a price below a value
    @Query("SELECT p FROM Product p WHERE p.price <= ?1")
    List<Product> findProductsCheaperThan(Double price);

    @Query(value = "SELECT * FROM products WHERE stock_quantity < ?1", nativeQuery = true)
    List<Product> findProductsWithLowStock(int stockQuantity);
}
