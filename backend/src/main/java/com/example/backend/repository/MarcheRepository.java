package com.example.backend.repository;

import com.example.backend.model.Marche;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarcheRepository extends JpaRepository<Marche, Long> {
}
