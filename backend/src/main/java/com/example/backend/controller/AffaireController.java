package com.example.backend.controller;

import com.example.backend.model.Affaire;
import com.example.backend.model.Pole;
import com.example.backend.model.StatusAffaire;
import com.example.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/affaires")
public class AffaireController {

    @Autowired
    private AffaireRepository affaireRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PoleRepository poleRepository;

    @Autowired
    private DivisionRepository divisionRepository;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @GetMapping
    public List<Affaire> getAllAffaires() {
        return affaireRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Affaire> getAffaireById(@PathVariable Long id) {
        return affaireRepository.findById(id)
                .map(affaire -> ResponseEntity.ok().body(affaire))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createAffaire(@RequestBody Affaire affaire) {
        if (affaire.getIdAffaire() == null) {
            return ResponseEntity.badRequest().body("ID Affaire must be provided");
        }
        if (affaireRepository.existsById(affaire.getIdAffaire())) {
            return ResponseEntity.badRequest().body("An affaire with this ID already exists");
        }
        affaire.setStatusAffaire(StatusAffaire.EN_CREATION); // Set initial status
        Affaire savedAffaire = affaireRepository.save(affaire);
        return ResponseEntity.ok(savedAffaire);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Affaire> updateAffaire(@PathVariable Long id, @RequestBody Affaire affaire) {
        return affaireRepository.findById(id)
                .map(existingAffaire -> {
                    existingAffaire.setLibelle_affaire(affaire.getLibelle_affaire());
                    existingAffaire.setPrixGlobal(affaire.getPrixGlobal());
                    existingAffaire.setStatusAffaire(affaire.getStatusAffaire());
                    existingAffaire.setMarche(affaire.getMarche());
                    existingAffaire.setDateDebut(affaire.getDateDebut());
                    existingAffaire.setDateFin(affaire.getDateFin());
                    existingAffaire.setDateArret(affaire.getDateArret());
                    existingAffaire.setDateRecommencement(affaire.getDateRecommencement());
                    
                    // Update client
                    if (affaire.getClient() != null && affaire.getClient().getId_client() != null) {
                        clientRepository.findById(affaire.getClient().getId_client())
                                .ifPresent(existingAffaire::setClient);
                    }
                    
                    // Update pole
                    if (affaire.getPolePrincipale() != null && affaire.getPolePrincipale().getId_pole() != null) {
                        poleRepository.findById(affaire.getPolePrincipale().getId_pole())
                                .ifPresent(existingAffaire::setPolePrincipale);
                    }
                    
                    // Update division
                    if (affaire.getDivisionPrincipale() != null && affaire.getDivisionPrincipale().getId_division() != null) {
                        divisionRepository.findById(affaire.getDivisionPrincipale().getId_division())
                                .ifPresent(existingAffaire::setDivisionPrincipale);
                    }
                    
                    existingAffaire.setPartCID(affaire.getPartCID());
                    return ResponseEntity.ok(affaireRepository.save(existingAffaire));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/statuses")
    public List<StatusAffaire> getAllStatuses() {
        return Arrays.asList(StatusAffaire.values());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteAffaire(@PathVariable Long id) {
        return affaireRepository.findById(id)
                .map(affaire -> {
                    affaireRepository.delete(affaire);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/last-id")
    public ResponseEntity<String> getLastAffaireId() {
        return affaireRepository.findTopByOrderByIdAffaireDesc()
                .map(affaire -> {
                    Long lastId = affaire.getIdAffaire();
                    int currentYear = java.time.Year.now().getValue();
                    long nextId;
                    if (lastId / 100000 == currentYear) {
                        nextId = lastId + 1;
                    } else {
                        nextId = (long) currentYear * 100000 + 1;
                    }
                    return ResponseEntity.ok(String.valueOf(nextId));
                })
                .orElse(ResponseEntity.ok(String.valueOf(java.time.Year.now().getValue() * 100000 + 1)));
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Long>> getAffaireStats() {
        long total = affaireRepository.count();
        long enCours = affaireRepository.countByStatusAffaire(StatusAffaire.EN_PRODUCTION);
        long terminees = affaireRepository.countByStatusAffaire(StatusAffaire.TERMINE);

        Map<String, Long> stats = new HashMap<>();
        stats.put("total", total);
        stats.put("enCours", enCours);
        stats.put("terminees", terminees);

        return ResponseEntity.ok(stats);
    }

    @GetMapping("/monthly-stats")
    public ResponseEntity<List<Long>> getMonthlyStats() {
        List<Long> monthlyStats = new ArrayList<>();
        Calendar cal = Calendar.getInstance();
        for (int i = 0; i < 12; i++) {
            cal.set(Calendar.MONTH, i);
            cal.set(Calendar.DAY_OF_MONTH, 1);
            Date startOfMonth = cal.getTime();
            cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
            Date endOfMonth = cal.getTime();
            long count = affaireRepository.countByStatusAffaireAndDateFinBetween(StatusAffaire.TERMINE, startOfMonth, endOfMonth);
            monthlyStats.add(count);
        }
        return ResponseEntity.ok(monthlyStats);
    }

    @GetMapping("/stats/{userId}")
    public ResponseEntity<Map<String, Long>> getAffaireStatsByPole(@PathVariable Long userId) {
        return utilisateurRepository.findById(userId)
            .map(user -> {
                Pole pole = user.getPole();
                if (pole == null) {
                    return ResponseEntity.badRequest().body(Collections.singletonMap("error", 0L));
                }

                Map<String, Long> stats = new HashMap<>();
                stats.put("total", affaireRepository.countByPolePrincipale(pole));
                stats.put("enCreation", affaireRepository.countByPolePrincipaleAndStatusAffaire(pole, StatusAffaire.EN_CREATION));
                stats.put("cdpDecide", affaireRepository.countByPolePrincipaleAndStatusAffaire(pole, StatusAffaire.CDP_DECIDE));
                stats.put("enProduction", affaireRepository.countByPolePrincipaleAndStatusAffaire(pole, StatusAffaire.EN_PRODUCTION));
                stats.put("interrompu", affaireRepository.countByPolePrincipaleAndStatusAffaire(pole, StatusAffaire.INTERROMPU));
                stats.put("termine", affaireRepository.countByPolePrincipaleAndStatusAffaire(pole, StatusAffaire.TERMINE));
                stats.put("annule", affaireRepository.countByPolePrincipaleAndStatusAffaire(pole, StatusAffaire.ANNULE));

                return ResponseEntity.ok(stats);
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
