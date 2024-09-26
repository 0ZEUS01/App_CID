package com.example.backend.controller;

import com.example.backend.model.*;
import com.example.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/missions")
@CrossOrigin(origins = "http://localhost:3000")
public class MissionController {

    private static final Logger logger = LoggerFactory.getLogger(MissionController.class);

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

    @Autowired
    private PartenaireRepository partenaireRepository;

    @Autowired
    private SousTraitantRepository sousTraitantRepository;

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
    @Transactional
    public ResponseEntity<?> repartitionTasks(@PathVariable Long id, @RequestBody RepartitionRequest repartitionRequest) {
        logger.info("Received repartition request for mission id: {}", id);
        logger.info("Request body: {}", repartitionRequest);

        try {
            Mission existingMission = missionRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Mission not found"));

            logger.info("Found mission: {}", existingMission);

            // Update the principal division's part
            existingMission.setPartDivPrincipale(repartitionRequest.getPrincipalDivisionPart());
            missionRepository.save(existingMission);
            logger.info("Updated principal division part to: {}", repartitionRequest.getPrincipalDivisionPart());

            // Clear existing secondary divisions
            missionDivisionRepository.deleteAllByMission(existingMission);
            logger.info("Cleared existing secondary divisions");

            // Add new secondary divisions
            for (MissionDivisionDTO divisionDTO : repartitionRequest.getSecondaryDivisions()) {
                Division division = divisionRepository.findById(divisionDTO.getDivisionId())
                        .orElseThrow(() -> new RuntimeException("Division not found: " + divisionDTO.getDivisionId()));
                
                MissionDivision missionDivision = new MissionDivision();
                missionDivision.setMission(existingMission);
                missionDivision.setDivision(division);
                missionDivision.setPartMission(divisionDTO.getPartMission());
                missionDivisionRepository.save(missionDivision);
                logger.info("Added secondary division: {}", missionDivision);
            }

            // Clear existing partners
            missionPartenaireRepository.deleteAllByMission(existingMission);
            logger.info("Cleared existing partners");

            // Add new partners
            for (MissionPartenaireDTO partenaireDTO : repartitionRequest.getPartenaires()) {
                Partenaire partenaire = partenaireRepository.findById(partenaireDTO.getPartenaireId())
                        .orElseThrow(() -> new RuntimeException("Partenaire not found: " + partenaireDTO.getPartenaireId()));
                
                MissionPartenaire missionPartenaire = new MissionPartenaire();
                missionPartenaire.setMission(existingMission);
                missionPartenaire.setPartenaire(partenaire);
                missionPartenaire.setPartMission(partenaireDTO.getPartMission());
                missionPartenaireRepository.save(missionPartenaire);
                logger.info("Added partner: {}", missionPartenaire);
            }

            // Clear existing subcontractors
            missionSTRepository.deleteAllByMission(existingMission);
            logger.info("Cleared existing subcontractors");

            // Add new subcontractors
            for (MissionSTDTO stDTO : repartitionRequest.getSousTraitants()) {
                SousTraitant sousTraitant = sousTraitantRepository.findById(stDTO.getSousTraitantId())
                        .orElseThrow(() -> new RuntimeException("Sous-traitant not found: " + stDTO.getSousTraitantId()));
                
                MissionST missionST = new MissionST();
                missionST.setMission(existingMission);
                missionST.setSousTraitant(sousTraitant);
                missionST.setPartMission(stDTO.getPartMission());
                missionSTRepository.save(missionST);
                logger.info("Added subcontractor: {}", missionST);
            }

            logger.info("Repartition completed successfully");
            return ResponseEntity.ok().body(existingMission);
        } catch (Exception e) {
            logger.error("Error during repartition", e);
            return ResponseEntity.badRequest().body("Error repartitioning tasks: " + e.getMessage());
        }
    }

    @PutMapping("/{id}/part-div-principale")
    public ResponseEntity<?> updateMissionPartDivPrincipale(@PathVariable Long id, @RequestBody PartDivPrincipaleDTO partDivPrincipaleDTO) {
        try {
            return missionRepository.findById(id)
                .map(existingMission -> {
                    Double newPartDivPrincipale = partDivPrincipaleDTO.getPartDivPrincipale();
                    
                    // Validate the newPartDivPrincipale
                    if (newPartDivPrincipale == null || newPartDivPrincipale < 0) {
                        return ResponseEntity.badRequest().body("La valeur de partDivPrincipale est invalide. Elle doit être un montant non négatif.");
                    }

                    // Check if partDivPrincipale exceeds partMissionCID
                    if (newPartDivPrincipale > existingMission.getPartMissionCID()) {
                        return ResponseEntity.badRequest().body("partDivPrincipale ne peut pas être supérieur à partMissionCID.");
                    }

                    existingMission.setPartDivPrincipale(newPartDivPrincipale);
                    Mission updatedMission = missionRepository.save(existingMission);
                    return ResponseEntity.ok().body(updatedMission);
                })
                .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            e.printStackTrace(); // Consider using a logger instead
            return ResponseEntity.badRequest().body("Erreur lors de la mise à jour de la part div principale de la mission : " + e.getMessage());
        }
    }

    public static class PartDivPrincipaleDTO {
        private Double partDivPrincipale;

        public Double getPartDivPrincipale() {
            return partDivPrincipale;
        }

        public void setPartDivPrincipale(Double partDivPrincipale) {
            this.partDivPrincipale = partDivPrincipale;
        }
    }

    public static class RepartitionRequest {
        private Double principalDivisionPart;
        private Set<MissionDivisionDTO> secondaryDivisions;
        private Set<MissionPartenaireDTO> partenaires;
        private Set<MissionSTDTO> sousTraitants;

        public Double getPrincipalDivisionPart() {
            return principalDivisionPart;
        }

        public void setPrincipalDivisionPart(Double principalDivisionPart) {
            this.principalDivisionPart = principalDivisionPart;
        }

        public Set<MissionDivisionDTO> getSecondaryDivisions() {
            return secondaryDivisions;
        }

        public void setSecondaryDivisions(Set<MissionDivisionDTO> secondaryDivisions) {
            this.secondaryDivisions = secondaryDivisions;
        }

        public Set<MissionPartenaireDTO> getPartenaires() {
            return partenaires;
        }

        public void setPartenaires(Set<MissionPartenaireDTO> partenaires) {
            this.partenaires = partenaires;
        }

        public Set<MissionSTDTO> getSousTraitants() {
            return sousTraitants;
        }

        public void setSousTraitants(Set<MissionSTDTO> sousTraitants) {
            this.sousTraitants = sousTraitants;
        }

        @Override
        public String toString() {
            return "RepartitionRequest{" +
                    "principalDivisionPart=" + principalDivisionPart +
                    ", secondaryDivisions=" + secondaryDivisions +
                    ", partenaires=" + partenaires +
                    ", sousTraitants=" + sousTraitants +
                    '}';
        }
    }

    public static class MissionDivisionDTO {
        private Long divisionId;
        private Double partMission;

        public Long getDivisionId() {
            return divisionId;
        }

        public void setDivisionId(Long divisionId) {
            this.divisionId = divisionId;
        }

        public Double getPartMission() {
            return partMission;
        }

        public void setPartMission(Double partMission) {
            this.partMission = partMission;
        }

        @Override
        public String toString() {
            return "MissionDivisionDTO{" +
                    "divisionId=" + divisionId +
                    ", partMission=" + partMission +
                    '}';
        }
    }

    public static class MissionPartenaireDTO {
        private Long partenaireId;
        private Double partMission;

        public Long getPartenaireId() {
            return partenaireId;
        }

        public void setPartenaireId(Long partenaireId) {
            this.partenaireId = partenaireId;
        }

        public Double getPartMission() {
            return partMission;
        }

        public void setPartMission(Double partMission) {
            this.partMission = partMission;
        }
    }

    public static class MissionSTDTO {
        private Long sousTraitantId;
        private Double partMission;

        public Long getSousTraitantId() {
            return sousTraitantId;
        }

        public void setSousTraitantId(Long sousTraitantId) {
            this.sousTraitantId = sousTraitantId;
        }

        public Double getPartMission() {
            return partMission;
        }

        public void setPartMission(Double partMission) {
            this.partMission = partMission;
        }
    }
}
