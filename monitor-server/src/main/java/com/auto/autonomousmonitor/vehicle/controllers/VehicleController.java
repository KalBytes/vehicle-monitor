package com.auto.autonomousmonitor.vehicle.controllers;

import com.auto.autonomousmonitor.vehicle.EModel;
import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import com.auto.autonomousmonitor.vehicle.services.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping("")
    public Vehicle createNewVehicle(
            @RequestParam("model") EModel model,
            @RequestParam("licensePlate") String licensePlate,
            @RequestParam(value = "file", required = false) MultipartFile file
    ) {
        Vehicle vehicle = new Vehicle();
        vehicle.setModel(model);
        vehicle.setLicensePlate(licensePlate);
        return vehicleService.createVehicle(vehicle, file);
    }
    @GetMapping("")
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    @GetMapping("/{vehicleId}")
    public Vehicle getVehicle(@PathVariable String vehicleId) {
        return  vehicleService.getVehicleById(vehicleId);
    }
}
