package com.example.backend.controller;

import com.example.backend.model.Affaire;
import com.example.backend.repository.AffaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/affaires")
public class AffaireController {

    @Autowired
    private AffaireRepository affaireRepository;

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
    public Affaire createAffaire(@RequestBody Affaire affaire) {
        return affaireRepository.save(affaire);
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
                    existingAffaire.setPourcentageAssurance(affaire.getPourcentageAssurance());
                    return ResponseEntity.ok().body(affaireRepository.save(existingAffaire));
                })
                .orElse(ResponseEntity.notFound().build());
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
}