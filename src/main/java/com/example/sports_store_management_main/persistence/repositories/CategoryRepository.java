package com.example.sports_store_management_main.persistence.repositories;

import com.example.sports_store_management_main.persistence.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {}
