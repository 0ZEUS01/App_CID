package com.example.backend.controller;

import com.example.backend.model.Marche;
import com.example.backend.repository.MarcheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/marches")
public class MarcheController {

    @Autowired
    private MarcheRepository marcheRepository;

    @GetMapping
    public List<Marche> getAllMarches() {
        return marcheRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Marche> getMarcheById(@PathVariable Long id) {
        return marcheRepository.findById(id)
                .map(marche -> ResponseEntity.ok().body(marche))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Marche createMarche(@RequestBody Marche marche) {
        return marcheRepository.save(marche);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Marche> updateMarche(@PathVariable Long id, @RequestBody Marche marche) {
        return marcheRepository.findById(id)
                .map(existingMarche -> {
                    existingMarche.setLibelle_marche(marche.getLibelle_marche());
                    existingMarche.setBudgetTotal(marche.getBudgetTotal());
                    existingMarche.setPartage(marche.isPartage());
                    existingMarche.setClient(marche.getClient());
                    return ResponseEntity.ok().body(marcheRepository.save(existingMarche));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteMarche(@PathVariable Long id) {
        return marcheRepository.findById(id)
                .map(marche -> {
                    marcheRepository.delete(marche);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
