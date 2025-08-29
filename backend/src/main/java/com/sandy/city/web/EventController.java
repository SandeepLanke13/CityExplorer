package com.sandy.city.web;

import com.sandy.city.model.Event;
import com.sandy.city.repo.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/events") @RequiredArgsConstructor
public class EventController {
    private final EventRepository events;
    @GetMapping public List<Event> list() { return events.findAll(); }
}
