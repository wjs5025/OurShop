package com.ourhome.ourshop.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@NoArgsConstructor
@Entity
public class Cart {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cartId;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cart", orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonIgnore  // 양방향 참조에서 무시할 필드
    private List<CartProduct> cartProducts = new ArrayList<>();
}
