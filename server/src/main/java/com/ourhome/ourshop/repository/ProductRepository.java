package com.ourhome.ourshop.repository;

import com.ourhome.ourshop.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
