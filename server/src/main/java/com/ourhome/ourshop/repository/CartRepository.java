package com.ourhome.ourshop.repository;

import com.ourhome.ourshop.domain.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
