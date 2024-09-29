package com.example.backend.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MissionSTDTO {
    private Long id;
    private Long missionId;
    private Long sousTraitantId;
    private String sousTraitantName;  // Add this field
    private Double partMission;
}