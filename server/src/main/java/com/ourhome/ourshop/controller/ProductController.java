package com.ourhome.ourshop.controller;

import com.ourhome.ourshop.domain.Product;
import com.ourhome.ourshop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductRepository productRepository;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getProducts(@PageableDefault Pageable pageable) {
        Page<Product> products = productRepository.findAll(pageable);
        PagedModel.PageMetadata pageMetadata = new PagedModel.PageMetadata(pageable.getPageSize(),
                products.getNumber(), products.getTotalElements());
        PagedModel<Product> model = PagedModel.of(products.getContent(), pageMetadata);

        return ResponseEntity.ok(model);
    }
}
