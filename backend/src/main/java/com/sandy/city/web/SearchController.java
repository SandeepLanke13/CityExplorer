package com.sandy.city.web;

import com.sandy.city.model.Place;
import com.sandy.city.repo.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/search") @RequiredArgsConstructor
public class SearchController {
    private final PlaceRepository places;

    @GetMapping
    public List<Place> search(@RequestParam(required=false) Long categoryId,
                              @RequestParam(required=false) String type,
                              @RequestParam(required=false) String q) {
        return places.search(categoryId, type, q);
    }
}
