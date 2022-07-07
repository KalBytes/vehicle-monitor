package com.auto.autonomousmonitor.vehicle.services;

import java.util.*;
import com.auto.autonomousmonitor.vehicle.EModel;
import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import org.springframework.stereotype.Service;

@Service
public class VehicleMockRepository {
    List<Vehicle> vehicleList = new ArrayList<>();

    public void createMocks() {

    }

    public Vehicle findById(UUID id) {
        return vehicleList.stream()
                .filter(vehicle -> id.equals(vehicle.getId()))
                .findAny()
                .orElse(null);
    }

    public List<Vehicle> findAll() {
        return vehicleList;
    }
}
