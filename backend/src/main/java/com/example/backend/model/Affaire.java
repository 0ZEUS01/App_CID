package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Affaire")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Affaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_affaire;

    @Column(nullable = false)
    private String libelle_affaire;

    @Column(name = "prix_global", nullable = false)
    private Double prixGlobal;

    @Column(name = "status_affaire", nullable = false)
    private String statusAffaire;

    @ManyToOne
    @JoinColumn(name = "num_marche")
    private Marche marche;

    @Column(name = "date_debut", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dateDebut;

    @Column(name = "date_fin", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dateFin;

    @Column(name = "date_arret")
    @Temporal(TemporalType.DATE)
    private Date dateArret;

    @Column(name = "date_recommencement")
    @Temporal(TemporalType.DATE)
    private Date dateRecommencement;

    @Column(name = "pourcentage_assurance")
    private Double pourcentageAssurance;
}
