package com.sandy.city.repo;

import com.sandy.city.model.Place;
import com.sandy.city.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    List<Place> findByCategory(Category category);

    @Query("SELECT p FROM Place p WHERE " +
           "(:categoryId IS NULL OR p.category.id = :categoryId) AND " +
           "(:type IS NULL OR lower(p.type) = lower(:type)) AND " +
           "(:q IS NULL OR lower(p.name) LIKE lower(concat('%', :q, '%')) " +
           " OR lower(p.description) LIKE lower(concat('%', :q, '%')))")
    List<Place> search(Long categoryId, String type, String q);
}
