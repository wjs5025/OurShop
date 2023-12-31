package com.ourhome.ourshop.dto;

import com.ourhome.ourshop.domain.CartProduct;
import com.ourhome.ourshop.domain.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CartProductDto {
    private long productId;
    private int amount;
    private Product product;

    public CartProductDto(CartProduct cartProduct) {
        this.productId = cartProduct.getProduct().getProduct_id();
        this.amount = cartProduct.getAmount();
        this.product = cartProduct.getProduct();
    }
}