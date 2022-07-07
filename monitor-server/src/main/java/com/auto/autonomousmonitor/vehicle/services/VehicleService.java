package com.auto.autonomousmonitor.vehicle.services;

import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import com.auto.autonomousmonitor.exceptions.ResourceNotFoundException;

import com.auto.autonomousmonitor.vehicle.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@Service
public class VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private CloudinaryService cloudinaryService;

    public Vehicle createVehicle(Vehicle vehicle, MultipartFile image) {
        String imageUrl = cloudinaryService.uploadFile(image);
        vehicle.setImage(imageUrl);
        return vehicleRepository.save(vehicle);
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle getVehicleById(String vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(UUID.fromString(vehicleId)).orElse(null);
        if (vehicle == null) {
            throw new ResourceNotFoundException(String.format("Vehicle with id: %s not found", vehicleId));
        }
        return vehicle;
    }
}
