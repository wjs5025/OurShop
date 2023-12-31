package com.ourhome.ourshop.controller;

import com.ourhome.ourshop.domain.Cart;
import com.ourhome.ourshop.domain.CartProduct;
import com.ourhome.ourshop.dto.CartDto;
import com.ourhome.ourshop.repository.CartRepository;
import com.ourhome.ourshop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cart")
public class CartController {
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;


    @GetMapping
    public ResponseEntity<?> getCart() {
        Cart cart = cartRepository.findById(1L).orElseGet(() -> cartRepository.save(new Cart()));
        CartDto cartDto = new CartDto(cart);
        return ResponseEntity.ok().body(cartDto.getCartProducts());
    }

    @PostMapping
    public ResponseEntity<?> addProductToCart(@RequestBody Map<String, Object> requestBody) {
        Long productId = Long.valueOf(requestBody.get("product_id").toString());

        // 장바구니 조회 또는 생성
        Cart cart = cartRepository.findById(1L).orElseGet(() -> cartRepository.save(new Cart()));

        // 장바구니에 해당 상품이 있는지 확인하기
        Optional<CartProduct> product = cart.getCartProducts().stream()
                .filter(cartProduct -> cartProduct.getProduct().getProduct_id() == productId).findFirst();

        // 장바구니에 상품이 있으면 개수 + 1;
        if (product.isPresent()) {
            product.get().setAmount(product.get().getAmount() + 1);
        } else {
            // 장바구니에 상품이 없으면 새로 등록
            CartProduct newCartProduct = new CartProduct();
            newCartProduct.setProduct(productRepository.findById(productId).orElse(null));
            newCartProduct.setAmount(1);
            newCartProduct.setCart(cart);
            cart.getCartProducts().add(newCartProduct);
        }

        // DB에 저장
        cartRepository.save(cart);

        return ResponseEntity.ok().body(cart.getCartProducts());
    }

    @DeleteMapping("/{product_id}")
    public ResponseEntity<?> decreaseOrRemoveProductFromCart(@PathVariable("product_id") Long productId) {
        Cart cart = cartRepository.findById(1L).orElseGet(() -> cartRepository.save(new Cart()));

        // 장바구니에서 해당 상품 찾기
        Optional<CartProduct> product = cart.getCartProducts().stream()
                .filter(cartProduct -> cartProduct.getProduct().getProduct_id() == productId)
                .findFirst();

        if (product.isPresent()) {
            // 수량이 1 이상이면 감소, 1인 경우 제거
            int newAmount = product.get().getAmount() - 1;
            if (newAmount > 0) {
                product.get().setAmount(newAmount);
            } else {
                cart.getCartProducts().removeIf(p -> p.getProduct().getProduct_id() == product.get().getProduct().getProduct_id());
            }

            // 변경된 장바구니 저장
            cartRepository.saveAndFlush(cart);

            return ResponseEntity.ok().body(cart.getCartProducts());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당되는 상품이 없습니다.");
        }
    }
}
