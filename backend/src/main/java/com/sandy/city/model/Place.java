package com.sandy.city.model;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name="places")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Place {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false) private String name;
    @Column(nullable=false) private String type; // Restaurant, Theatre, etc.
    @Column(columnDefinition="TEXT") private String description;
    private double lat;
    private double lng;
    private double rating;
    private String price_range;
    private String image_url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id")
    private Category category;
}
