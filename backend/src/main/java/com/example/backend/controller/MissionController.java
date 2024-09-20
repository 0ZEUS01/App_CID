package com.example.backend.controller;

import com.example.backend.model.*;
import com.example.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/missions")
public class MissionController {

    @Autowired
    private MissionRepository missionRepository;

    @Autowired
    private AffaireRepository affaireRepository;

    @Autowired
    private UniteRepository uniteRepository;

    @Autowired
    private MissionDivisionRepository missionDivisionRepository;

    @Autowired
    private MissionSTRepository missionSTRepository;

    @Autowired
    private MissionPartenaireRepository missionPartenaireRepository;

    @GetMapping
    public List<Mission> getAllMissions() {
        return missionRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mission> getMissionById(@PathVariable Long id) {
        return missionRepository.findById(id)
                .map(mission -> ResponseEntity.ok().body(mission))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Mission> createMission(@RequestBody Mission mission) {
        if (mission.getUnite() == null || mission.getUnite().getId_unite() == null) {
            return ResponseEntity.badRequest().body(null);
        }

        Unite unite = uniteRepository.findById(mission.getUnite().getId_unite())
                .orElseThrow(() -> new RuntimeException("Unite not found"));
        mission.setUnite(unite);

        // Handle Affaire relationship
        if (mission.getAffaire() == null || mission.getAffaire().getIdAffaire() == null) {
            return ResponseEntity.badRequest().body(null);
        }
        Affaire affaire = affaireRepository.findById(mission.getAffaire().getIdAffaire())
                .orElseThrow(() -> new RuntimeException("Affaire not found"));
        mission.setAffaire(affaire);

        // Handle MissionDivision relationships
        if (mission.getMissionDivisions() != null) {
            Set<MissionDivision> newMissionDivisions = new HashSet<>();
            for (MissionDivision md : mission.getMissionDivisions()) {
                MissionDivision newMd = new MissionDivision();
                newMd.setDivision(md.getDivision());
                newMd.setPrincipal(md.isPrincipal());
                newMd.setPartMission(md.getPartMission());
                mission.addMissionDivision(newMd);
                newMissionDivisions.add(newMd);
            }
            mission.setMissionDivisions(newMissionDivisions);
        }

        Mission savedMission = missionRepository.save(mission);
        return ResponseEntity.ok(savedMission);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Mission> updateMission(@PathVariable Long id, @RequestBody Mission mission) {
        return (ResponseEntity<Mission>) missionRepository.findById(id)
                .map(existingMission -> {
                    existingMission.setLibelle_mission(mission.getLibelle_mission());
                    existingMission.setQuantite(mission.getQuantite());
                    
                    // Handle Unite relationship
                    if (mission.getUnite() == null || mission.getUnite().getId_unite() == null) {
                        return ResponseEntity.badRequest().body(null);
                    }

                    Unite unite = uniteRepository.findById(mission.getUnite().getId_unite())
                            .orElseThrow(() -> new RuntimeException("Unite not found"));
                    existingMission.setUnite(unite);

                    // Update MissionDivisions
                    updateMissionDivisions(existingMission, mission.getMissionDivisions());
                    
                    // Update MissionSTs (Sous-Traitants)
                    updateMissionSTs(existingMission, mission.getSousTraitants());
                    
                    // Update MissionPartenaires
                    updateMissionPartenaires(existingMission, mission.getPartenaires());
                    
                    return ResponseEntity.ok().body(missionRepository.save(existingMission));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    private void updateMissionDivisions(Mission existingMission, Set<MissionDivision> newDivisions) {
        // Remove divisions no longer associated with the mission
        existingMission.getMissionDivisions().stream()
                .filter(md -> !newDivisions.contains(md))
                .forEach(missionDivisionRepository::delete);

        // Update existing divisions and add new ones
        newDivisions.forEach(md -> {
            md.setMission(existingMission);
            missionDivisionRepository.save(md);
        });

        existingMission.setMissionDivisions(newDivisions);
    }

    private void updateMissionSTs(Mission existingMission, Set<MissionST> newSousTraitants) {
        // Remove sous-traitants no longer associated with the mission
        existingMission.getSousTraitants().stream()
                .filter(st -> !newSousTraitants.contains(st))
                .forEach(missionSTRepository::delete);

        // Update existing sous-traitants and add new ones
        newSousTraitants.forEach(st -> {
            st.setMission(existingMission);
            missionSTRepository.save(st);
        });

        existingMission.setSousTraitants(newSousTraitants);
    }

    private void updateMissionPartenaires(Mission existingMission, Set<MissionPartenaire> newPartenaires) {
        // Remove partenaires no longer associated with the mission
        existingMission.getPartenaires().stream()
                .filter(p -> !newPartenaires.contains(p))
                .forEach(missionPartenaireRepository::delete);

        // Update existing partenaires and add new ones
        newPartenaires.forEach(p -> {
            p.setMission(existingMission);
            missionPartenaireRepository.save(p);
        });

        existingMission.setPartenaires(newPartenaires);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteMission(@PathVariable Long id) {
        return missionRepository.findById(id)
                .map(mission -> {
                    missionRepository.delete(mission);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
