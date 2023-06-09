package com.military.wardrobe.repositories;

import com.military.wardrobe.entities.SoldierEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "soldiers", path = "soldiers")
public interface SoldierRepository extends JpaRepository<SoldierEntity, Long> {
}
