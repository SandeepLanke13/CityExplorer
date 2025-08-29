package com.sandy.city.web;

import com.sandy.city.model.Place;
import com.sandy.city.model.Review;
import com.sandy.city.model.User;
import com.sandy.city.repo.PlaceRepository;
import com.sandy.city.repo.ReviewRepository;
import com.sandy.city.repo.UserRepository;
import com.sandy.city.web.dto.ReviewRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewRepository reviews;
    private final PlaceRepository places;
    private final UserRepository users;

    @GetMapping
    public ResponseEntity<List<Review>> list(@RequestParam Long placeId) {
        return places.findById(placeId)
                .map(p -> ResponseEntity.ok(reviews.findByPlace(p)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody ReviewRequest req) {
        User user = users.findById(req.getUserId()).orElse(null);
        Place place = places.findById(req.getPlaceId()).orElse(null);
        if (user == null || place == null) {
            return ResponseEntity.badRequest().body("Invalid user/place");
        }
        Review r = Review.builder()
                .user(user)
                .place(place)
                .rating(req.getRating())
                .review_text(req.getReviewText())
                .build();
        return ResponseEntity.ok(reviews.save(r));
    }
}
