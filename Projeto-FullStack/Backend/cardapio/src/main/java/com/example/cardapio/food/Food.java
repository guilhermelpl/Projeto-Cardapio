package com.example.cardapio.food;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Table(name = "cardapio")
@Entity(name = "foods")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Food {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String Title;

    private String image;

    private Integer price;

    public Food(FoodRequestDTO data) {
        this.image = data.image();
        this.price = data.price();
        this.Title = data.title();
    }

}


