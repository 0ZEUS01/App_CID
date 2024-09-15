package com.example.backend.repository;

import com.example.backend.model.Affaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AffaireRepository extends JpaRepository<Affaire, Long> {
}
