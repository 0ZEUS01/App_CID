package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "Marche")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Marche {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_marche;

    @Column(nullable = false)
    private String libelle_marche;

    @Column(name = "budget_total", nullable = false)
    private Double budgetTotal;

    @Column(name = "is_partage", nullable = false)
    private boolean isPartage;

    @ManyToOne
    @JoinColumn(name = "id_client")
    private Client client;
}
