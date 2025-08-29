package com.sandy.city.web;

import com.sandy.city.repo.UserRepository;
import com.sandy.city.web.dto.LoginRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository users;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        // defensive null-safe handling for Java 8
        String email = req.getEmail() == null ? "" : req.getEmail().trim().toLowerCase(Locale.ROOT);
        String password = req.getPassword() == null ? "" : req.getPassword();

        return users.findByEmail(email)
                .filter(u -> password.equals(u.getPassword()))
                .<ResponseEntity<?>>map(u -> {
                    Map<String, Object> body = new HashMap<String, Object>();
                    body.put("id", u.getId());
                    body.put("name", u.getName());
                    body.put("email", u.getEmail());
                    return ResponseEntity.ok(body);
                })
                .orElseGet(() -> {
                    Map<String, Object> err = new HashMap<String, Object>();
                    err.put("error", "Invalid credentials");
                    return ResponseEntity.status(401).body(err);
                });
    }
}
