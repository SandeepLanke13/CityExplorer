package com.sandy.city.web;

import com.sandy.city.model.Category;
import com.sandy.city.model.Place;
import com.sandy.city.repo.CategoryRepository;
import com.sandy.city.repo.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/api/places") @RequiredArgsConstructor
public class PlaceController {
    private final PlaceRepository places;
    private final CategoryRepository categories;

    @GetMapping public List<Place> list(
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String q) {
        return places.search(categoryId, type, q);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Place> get(@PathVariable Long id) {
        return places.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/by-category/{slug}")
    public ResponseEntity<List<Place>> byCategory(@PathVariable String slug) {
        Category c = categories.findBySlug(slug).orElse(null);
        if (c == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(places.findByCategory(c));
    }
}
