package com.auto.autonomousmonitor.vehicle.repositories;

import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VehicleRepository extends JpaRepository<Vehicle, UUID> {
}
