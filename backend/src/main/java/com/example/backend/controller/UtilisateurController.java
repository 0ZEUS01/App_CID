package com.example.backend.controller;

import com.example.backend.model.Role;
import com.example.backend.model.Utilisateur;
import com.example.backend.repository.RoleRepository;
import com.example.backend.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/utilisateurs")
public class UtilisateurController {

    @Autowired
    private UtilisateurRepository utilisateurRepository;
    
    @Autowired
    private RoleRepository roleRepository;

    @GetMapping
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Utilisateur> getUtilisateurById(@PathVariable Long id) {
        return utilisateurRepository.findById(id)
                .map(utilisateur -> ResponseEntity.ok().body(utilisateur))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createUtilisateur(@RequestBody Utilisateur utilisateur) {
        try {
            Utilisateur savedUtilisateur = utilisateurRepository.save(utilisateur);
            return ResponseEntity.ok(savedUtilisateur);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error creating user: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Utilisateur> updateUtilisateur(@PathVariable Long id, @RequestBody Utilisateur utilisateur) {
        return utilisateurRepository.findById(id)
                .map(existingUtilisateur -> {
                    existingUtilisateur.setPrenom(utilisateur.getPrenom());
                    existingUtilisateur.setNom(utilisateur.getNom());
                    existingUtilisateur.setEmail(utilisateur.getEmail());
                    existingUtilisateur.setNum_telephone(utilisateur.getNum_telephone());
                    existingUtilisateur.setUsername(utilisateur.getUsername());
                    existingUtilisateur.setMot_de_passe(utilisateur.getMot_de_passe());
                    existingUtilisateur.setDate_naissance(utilisateur.getDate_naissance());
                    existingUtilisateur.setSexe(utilisateur.getSexe());
                    existingUtilisateur.setAdresse(utilisateur.getAdresse());

                    // Handle Pole, Division, and Pays
                    existingUtilisateur.setPole(utilisateur.getPole());
                    existingUtilisateur.setDivision(utilisateur.getDivision());
                    existingUtilisateur.setPays(utilisateur.getPays());

                    // Handle Roles
                    if (utilisateur.getRoles() != null) {
                        Set<Role> updatedRoles = utilisateur.getRoles().stream()
                                .filter(role -> role != null && role.getId_role() != null)
                                .map(role -> roleRepository.findById(role.getId_role())
                                        .orElseThrow(() -> new RuntimeException("Role not found with id: " + role.getId_role())))
                                .collect(Collectors.toSet());
                        existingUtilisateur.setRoles(updatedRoles);
                    } else {
                        existingUtilisateur.setRoles(null);
                    }

                    return ResponseEntity.ok().body(utilisateurRepository.save(existingUtilisateur));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUtilisateur(@PathVariable Long id) {
        return utilisateurRepository.findById(id)
                .map(utilisateur -> {
                    utilisateurRepository.delete(utilisateur);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/check-email")
    public ResponseEntity<Boolean> checkEmailAvailability(@RequestParam String email) {
        boolean isAvailable = !utilisateurRepository.findByEmail(email).isPresent();
        return ResponseEntity.ok(isAvailable);
    }

    @GetMapping("/check-username")
    public ResponseEntity<Boolean> checkUsernameAvailability(@RequestParam String username) {
        boolean isAvailable = !utilisateurRepository.findByUsername(username).isPresent();
        return ResponseEntity.ok(isAvailable);
    }
}

