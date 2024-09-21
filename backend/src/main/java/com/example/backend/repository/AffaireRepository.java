package com.example.backend.repository;

import com.example.backend.model.Affaire;
import com.example.backend.model.StatusAffaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface AffaireRepository extends JpaRepository<Affaire, Long> {
    Optional<Affaire> findTopByOrderByIdAffaireDesc();
    long countByStatusAffaire(StatusAffaire statusAffaire);
    long countByStatusAffaireAndDateFinBetween(StatusAffaire statusAffaire, Date startDate, Date endDate);
}
