package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Utilisateur")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_utilisateur;

    @Column(nullable = false, length = 100)
    private String prenom;

    @Column(nullable = false, length = 100)
    private String nom;

    @Column(nullable = false, unique = true, length = 255)
    private String email;

    @Column(length = 20)
    private String num_telephone;

    @Column(nullable = false, unique = true, length = 100)
    private String username;

    @Column(nullable = false, length = 255)
    private String mot_de_passe;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date date_naissance;

    @Column(nullable = false, length = 1)
    private char sexe;

    @Column(nullable = false, length = 255)
    private String adresse;

    @Column(nullable = false)
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "pole")
    private Pole pole;

    @ManyToOne
    @JoinColumn(name = "division")
    private Division division;

    @ManyToOne
    @JoinColumn(name = "pays")
    private Pays pays;
}

