package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "Mission_Division")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MissionDivision {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "mission_id", nullable = false)
    private Mission mission;

    @ManyToOne
    @JoinColumn(name = "division_id", nullable = false)
    private Division division;

    @Column(name = "is_principal", nullable = false)
    private boolean isPrincipal;

    @Column(name = "part_mission", nullable = true)
    private Double partMission;

    public boolean isPrincipal() {
        return isPrincipal;
    }

    public void setPrincipal(boolean principal) {
        isPrincipal = principal;
    }
}