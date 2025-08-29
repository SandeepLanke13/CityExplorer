package com.sandy.city.model;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name="users")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true, nullable = false, length = 320)
    private String email;
    @Column(nullable = false)
    private String password; // plain for demo (no security)
    @Column(columnDefinition = "json")
    private String preferences;
}
