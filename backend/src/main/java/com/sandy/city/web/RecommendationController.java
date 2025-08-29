package com.sandy.city.web;

import com.sandy.city.model.Place;
import com.sandy.city.repo.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController @RequestMapping("/api/recommendations") @RequiredArgsConstructor
public class RecommendationController {
    private final PlaceRepository places;

    // naive: top-rated across all places, optionally filtered by type
    @GetMapping
    public List<Place> recommend(@RequestParam(required=false) String type) {
        return places.findAll().stream()
                .filter(p -> type == null || p.getType().equalsIgnoreCase(type))
                .sorted(Comparator.comparingDouble(Place::getRating).reversed())
                .limit(10)
                .collect(Collectors.toList());
    }
}
