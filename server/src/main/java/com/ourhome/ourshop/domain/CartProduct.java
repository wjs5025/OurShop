package com.ourhome.ourshop.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@Entity

public class CartProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "productId")
    private Product product;

    private int amount;

    @ManyToOne
    @JoinColumn(name = "cartId")
    private Cart cart;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CartProduct that = (CartProduct) o;

        // product_id만 동일하게 비교
        return Objects.equals(getProduct().getProductId(), that.getProduct().getProductId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProduct().getProductId());
    }
}