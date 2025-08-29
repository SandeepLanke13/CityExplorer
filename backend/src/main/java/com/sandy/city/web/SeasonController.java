package com.sandy.city.web;

import com.sandy.city.model.SeasonInfo;
import com.sandy.city.repo.SeasonInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/season")
@RequiredArgsConstructor
public class SeasonController {

    private final SeasonInfoRepository season;

    @GetMapping
    public List<SeasonInfo> all(@RequestParam(required = false) String city) {
        // Java 8 compatible check
        return (city == null || city.trim().isEmpty())
                ? season.findAll()
                : season.findByCity(city);
    }
}
