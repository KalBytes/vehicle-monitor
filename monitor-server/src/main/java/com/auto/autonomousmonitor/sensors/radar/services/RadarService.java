package com.auto.autonomousmonitor.sensors.radar.services;

import com.auto.autonomousmonitor.exceptions.ResourceNotFoundException;
import com.auto.autonomousmonitor.sensors.radar.model.Radar;
import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import com.auto.autonomousmonitor.vehicle.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class RadarService {

    @Autowired
    VehicleRepository vehicleRepository;


    @Autowired
    WebSocketUpdateRadarService webSocketUpdateRadarService;

    public Radar updateRadarSensorData(UUID vehicleId, Radar radarSensorData) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElse(null);
        if (vehicle == null) {
            throw new ResourceNotFoundException(String.format("Vehicle with id: %s not found", vehicleId));
        }
        radarSensorData.setVehicleId(vehicle.getId());
        webSocketUpdateRadarService.sendUpdate(radarSensorData);
        return radarSensorData;
    }
}
