package com.military.wardrobe.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "soldiers")
public class SoldierEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String photo;
    private String name;
    private String surname;
    private int age;
    private String clothes;
    private String helmet;
    private String boots;
    private String armor;
}
