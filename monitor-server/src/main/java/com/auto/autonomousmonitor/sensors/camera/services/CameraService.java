package com.auto.autonomousmonitor.sensors.camera.services;

import com.auto.autonomousmonitor.exceptions.ResourceNotFoundException;
import com.auto.autonomousmonitor.sensors.camera.model.Camera;
import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import com.auto.autonomousmonitor.vehicle.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
public class CameraService {

    @Autowired
    VehicleRepository vehicleRepository;

    @Autowired
    WebSocketUpdateCameraService webSocketUpdateCameraService;

    public Camera updateCameraSensorData(UUID vehicleId, Camera cameraSensorData) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElse(null);
        if (vehicle == null) {
            throw new ResourceNotFoundException(String.format("Vehicle with id: %s not found", vehicleId));
        }
        cameraSensorData.setVehicleId(vehicle.getId());
        webSocketUpdateCameraService.sendUpdate(cameraSensorData);
        return cameraSensorData;
    }
}
