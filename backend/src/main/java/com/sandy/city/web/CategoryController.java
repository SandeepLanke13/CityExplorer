package com.sandy.city.web;

import com.sandy.city.model.Category;
import com.sandy.city.repo.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/categories") @RequiredArgsConstructor
public class CategoryController {
    private final CategoryRepository categories;

    @GetMapping public List<Category> all() { return categories.findAll(); }
}
