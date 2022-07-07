package com.auto.autonomousmonitor.status.services;

import com.auto.autonomousmonitor.exceptions.ResourceNotFoundException;
import com.auto.autonomousmonitor.status.models.Status;
import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import com.auto.autonomousmonitor.vehicle.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
@Transactional
public class StatusService {
    @Autowired
    VehicleRepository vehicleRepository;

    @Autowired
    WebSocketUpdateVehicleStatusService webSocketUpdateVehicleStatusService;

    public ResponseEntity<?> updateStatus(UUID vehicleId, Status status) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElse(null);
        if (vehicle == null) {
            throw new ResourceNotFoundException(String.format("Vehicle with id: %s not found", vehicleId));
        }
        status.setVehicleId(vehicle.getId());
        webSocketUpdateVehicleStatusService.sendUpdate(status);
        return ResponseEntity.ok().build();
    }
}
