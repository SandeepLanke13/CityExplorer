package com.sandy.city.model;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name="season_info")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class SeasonInfo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String city;
    private String season;
    private String climate;
    private String best_time_to_visit;
}
