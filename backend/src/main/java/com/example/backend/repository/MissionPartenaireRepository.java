package com.example.backend.repository;

import com.example.backend.model.MissionPartenaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MissionPartenaireRepository extends JpaRepository<MissionPartenaire, Long> {
}