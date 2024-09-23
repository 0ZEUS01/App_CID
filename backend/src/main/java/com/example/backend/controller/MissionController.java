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
    private DivisionRepository divisionRepository;

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
    public ResponseEntity<?> createMission(@RequestBody Mission mission) {
        try {
            // Validate Unite
            if (mission.getUnite() == null || mission.getUnite().getId_unite() == null) {
                return ResponseEntity.badRequest().body("Unite is required");
            }
            Unite unite = uniteRepository.findById(mission.getUnite().getId_unite())
                    .orElseThrow(() -> new RuntimeException("Unite not found"));
            mission.setUnite(unite);

            // Validate Affaire
            if (mission.getAffaire() == null || mission.getAffaire().getIdAffaire() == null) {
                return ResponseEntity.badRequest().body("Affaire is required");
            }
            Affaire affaire = affaireRepository.findById(mission.getAffaire().getIdAffaire())
                    .orElseThrow(() -> new RuntimeException("Affaire not found"));
            mission.setAffaire(affaire);

            // Validate Principal Division
            if (mission.getPrincipalDivision() == null || mission.getPrincipalDivision().getId_division() == null) {
                return ResponseEntity.badRequest().body("Principal Division is required");
            }
            Division principalDivision = divisionRepository.findById(mission.getPrincipalDivision().getId_division())
                    .orElseThrow(() -> new RuntimeException("Principal Division not found"));
            mission.setPrincipalDivision(principalDivision);

            // Handle Secondary Divisions
            if (mission.getSecondaryDivisions() != null && !mission.getSecondaryDivisions().isEmpty()) {
                Set<MissionDivision> newSecondaryDivisions = new HashSet<>();
                for (MissionDivision md : mission.getSecondaryDivisions()) {
                    if (md.getDivision() == null || md.getDivision().getId_division() == null) {
                        return ResponseEntity.badRequest().body("Invalid Secondary Division");
                    }
                    Division division = divisionRepository.findById(md.getDivision().getId_division())
                            .orElseThrow(() -> new RuntimeException("Secondary Division not found"));
                    
                    MissionDivision newMd = new MissionDivision();
                    newMd.setDivision(division);
                    newMd.setPartMission(md.getPartMission());
                    newMd.setMission(mission);
                    newSecondaryDivisions.add(newMd);
                }
                mission.setSecondaryDivisions(newSecondaryDivisions);
            }

            Mission savedMission = missionRepository.save(mission);
            return ResponseEntity.ok(savedMission);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error creating mission: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMission(@PathVariable Long id, @RequestBody Mission mission) {
        try {
            return missionRepository.findById(id)
                .map(existingMission -> {
                    // Update basic fields
                    existingMission.setLibelle_mission(mission.getLibelle_mission());
                    existingMission.setPrixMissionTotal(mission.getPrixMissionTotal());
                    existingMission.setPartMissionCID(mission.getPartMissionCID());
                    existingMission.setDateDebut(mission.getDateDebut());
                    existingMission.setDateFin(mission.getDateFin());
                    
                    // Handle Unite relationship
                    if (mission.getUnite() != null && mission.getUnite().getId_unite() != null) {
                        Unite unite = uniteRepository.findById(mission.getUnite().getId_unite())
                                .orElseThrow(() -> new RuntimeException("Unite not found"));
                        existingMission.setUnite(unite);
                    }

                    // Handle quantite and prixMissionUnitaire
                    if (mission.getUnite().getId_unite() != 10) { // Assuming 10 is the ID for "forfait"
                        existingMission.setQuantite(mission.getQuantite());
                        existingMission.setPrixMissionUnitaire(mission.getPrixMissionUnitaire());
                    } else {
                        existingMission.setQuantite(0);
                        existingMission.setPrixMissionUnitaire(null);
                    }

                    // Handle Principal Division
                    if (mission.getPrincipalDivision() != null && mission.getPrincipalDivision().getId_division() != null) {
                        Division principalDivision = divisionRepository.findById(mission.getPrincipalDivision().getId_division())
                                .orElseThrow(() -> new RuntimeException("Principal Division not found"));
                        existingMission.setPrincipalDivision(principalDivision);
                    }

                    // Handle Affaire
                    if (mission.getAffaire() != null && mission.getAffaire().getIdAffaire() != null) {
                        Affaire affaire = affaireRepository.findById(mission.getAffaire().getIdAffaire())
                                .orElseThrow(() -> new RuntimeException("Affaire not found"));
                        existingMission.setAffaire(affaire);
                    }

                    Mission updatedMission = missionRepository.save(existingMission);
                    return ResponseEntity.ok().body(updatedMission);
                })
                .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error updating mission: " + e.getMessage());
        }
    }

    private void updateSecondaryDivisions(Mission existingMission, Set<MissionDivision> newSecondaryDivisions) {
        // Remove secondary divisions no longer associated with the mission
        existingMission.getSecondaryDivisions().removeIf(md -> 
            newSecondaryDivisions.stream().noneMatch(newMd -> 
                newMd.getDivision() != null && 
                md.getDivision() != null && 
                newMd.getDivision().getId_division().equals(md.getDivision().getId_division())
            )
        );

        // Update existing secondary divisions and add new ones
        newSecondaryDivisions.forEach(newMd -> {
            if (newMd.getDivision() != null && newMd.getDivision().getId_division() != null) {
                MissionDivision existingMd = existingMission.getSecondaryDivisions().stream()
                    .filter(md -> md.getDivision() != null && 
                                  md.getDivision().getId_division().equals(newMd.getDivision().getId_division()))
                    .findFirst()
                    .orElse(null);

                if (existingMd == null) {
                    // This is a new secondary division
                    MissionDivision md = new MissionDivision();
                    md.setMission(existingMission);
                    md.setDivision(newMd.getDivision());
                    md.setPartMission(newMd.getPartMission());
                    existingMission.getSecondaryDivisions().add(md);
                } else {
                    // Update existing secondary division
                    existingMd.setPartMission(newMd.getPartMission());
                }
            }
        });
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

    @GetMapping("/affaire/{affaireId}")
    public ResponseEntity<List<Mission>> getMissionsByAffaireId(@PathVariable Long affaireId) {
        List<Mission> missions = missionRepository.findByAffaireIdAffaire(affaireId);
        if (missions.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(missions);
    }

    @PostMapping("/{id}/repartition")
    public ResponseEntity<?> repartitionTasks(@PathVariable Long id, @RequestBody Set<MissionDivision> newDivisions) {
        try {
            return missionRepository.findById(id)
                .map(existingMission -> {
                    updateSecondaryDivisions(existingMission, newDivisions);
                    Mission updatedMission = missionRepository.save(existingMission);
                    return ResponseEntity.ok().body(updatedMission);
                })
                .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error repartitioning tasks: " + e.getMessage());
        }
    }
}
