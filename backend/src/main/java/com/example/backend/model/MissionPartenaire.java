package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Objects;

@Entity
@Table(name = "Mission_Partenaire")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MissionPartenaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "mission_id", nullable = false)
    private Mission mission;

    @ManyToOne
    @JoinColumn(name = "partenaire_id", nullable = false)
    private Partenaire partenaire;

    @Column(name = "part_mission", nullable = true)
    private Double partMission;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MissionPartenaire)) return false;
        MissionPartenaire that = (MissionPartenaire) o;
        return Objects.equals(getId(), that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}