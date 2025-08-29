package com.sandy.city.repo;

import com.sandy.city.model.SeasonInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeasonInfoRepository extends JpaRepository<SeasonInfo, Long> {
    List<SeasonInfo> findByCity(String city);
}
