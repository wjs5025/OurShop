package com.ourhome.ourshop.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table
public class Product {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long product_id;

    @Column
    private String name; // 상품명

    @Column
    private String description; // 상품 설명

    @Column
    private long price; // 정가

    @Column
    private int discountRate; // 할인율

    @Column
    private String storageMethod; // 보관 방법

    @Column
    private String photoUrl; // 상품 사진 url

    @Builder
    public Product(String name, String description, long price, int discountRate, String storageMethod, String photoUrl){
        this.name = name;
        this.description = description;
        this.price = price;
        this.discountRate = discountRate;
        this.storageMethod = storageMethod;
        this.photoUrl = photoUrl;
    }

    public void update(Product product){
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.discountRate = product.discountRate;
        this.storageMethod = product.storageMethod;
        this.photoUrl = product.photoUrl;
    }
}
