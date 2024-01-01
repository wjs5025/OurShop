package com.ourhome.ourshop.dto;

import com.ourhome.ourshop.domain.Cart;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class CartDto {
    private long cartId;
    private List<CartProductDto> cartProducts;

    public CartDto(Cart cart) {
        this.cartId = cart.getCartId();
        this.cartProducts = cart.getCartProducts().stream()
                .map(CartProductDto::new)
                .collect(Collectors.toList());
    }
}