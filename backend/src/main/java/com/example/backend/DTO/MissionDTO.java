package com.example.backend.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDate;
import java.util.Set;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MissionDTO {
    private Long id_mission;
    private String libelle_mission;
    private Integer quantite;
    private Long uniteId;
    private Double prixMissionTotal;
    private Double prixMissionUnitaire;
    private Double partMissionCID;
    private Double compteClient;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private LocalDate dateArret;
    private LocalDate dateRecommencement;
    private Long affaireId;
    private Long principalDivisionId;
    private Double partDivPrincipale;
    private Set<Long> secondaryDivisionIds;
    private Set<Long> sousTraitantIds;
    private Set<Long> partenaireIds;

    private List<SecondaryDivisionDTO> secondaryDivisions;
    private List<SousTraitantDTO> sousTraitants;
    private List<PartenaireDTO> partenaires;

    public List<SecondaryDivisionDTO> getSecondaryDivisions() {
        return secondaryDivisions;
    }

    public void setSecondaryDivisions(List<SecondaryDivisionDTO> secondaryDivisions) {
        this.secondaryDivisions = secondaryDivisions;
    }

    public List<SousTraitantDTO> getSousTraitants() {
        return sousTraitants;
    }

    public void setSousTraitants(List<SousTraitantDTO> sousTraitants) {
        this.sousTraitants = sousTraitants;
    }

    public List<PartenaireDTO> getPartenaires() {
        return partenaires;
    }

    public void setPartenaires(List<PartenaireDTO> partenaires) {
        this.partenaires = partenaires;
    }

    // Inner classes for nested DTOs
    public static class SecondaryDivisionDTO {
        private Long id;
        private Double partMission;

        // Getters and setters
    }

    public static class SousTraitantDTO {
        private Long id;
        private Double partMission;

        // Getters and setters
    }

    public static class PartenaireDTO {
        private Long id;
        private Double partMission;

        // Getters and setters
    }
}