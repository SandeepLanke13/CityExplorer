package com.sandy.city.repo;

import com.sandy.city.model.Review;
import com.sandy.city.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByPlace(Place place);
}
