package com.military.wardrobe.controllers;

import com.military.wardrobe.entities.SoldierEntity;
import com.military.wardrobe.repositories.SoldierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class SoldierController {
    @Autowired
    private SoldierRepository sRepo;

    @GetMapping("/cards")
    public List<SoldierEntity> getSoldiers() {
        List<SoldierEntity> soldiersList = sRepo.findAll();
        return soldiersList;
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public SoldierEntity postSoldier(@RequestBody SoldierEntity soldier) {
        sRepo.save(soldier);
        return soldier;
    }

    @PutMapping("/update/{id}")
    public SoldierEntity putSoldier(@PathVariable long id, @RequestBody SoldierEntity updatedSoldier) {
        SoldierEntity newSoldier = sRepo.findById(id)
                .orElseThrow(() -> new ResourceAccessException("No soldier found with id:" + id));

        newSoldier.setPhoto(updatedSoldier.getPhoto());
        newSoldier.setName(updatedSoldier.getName());
        newSoldier.setSurname(updatedSoldier.getSurname());
        newSoldier.setAge(updatedSoldier.getAge());
        newSoldier.setClothes(updatedSoldier.getClothes());
        newSoldier.setHelmet(updatedSoldier.getHelmet());
        newSoldier.setBoots(updatedSoldier.getBoots());
        newSoldier.setArmor(updatedSoldier.getArmor());

        return sRepo.save(newSoldier);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteSoldier(@PathVariable long id) {
        SoldierEntity delSol = sRepo.findById(id)
                .orElseThrow(() -> new ResourceAccessException("No soldier found with id:" + id));

        sRepo.delete(delSol);
    }
}