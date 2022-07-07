package com.auto.autonomousmonitor.sensors.camera.controllers;

import com.auto.autonomousmonitor.sensors.camera.model.Camera;
import com.auto.autonomousmonitor.sensors.camera.services.CameraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/api/vehicle/{vehicleId}/camera")
public class CameraController {
    @Autowired
    CameraService cameraService;

    @PostMapping("")
    public Camera updateCameraSensorData(
            @PathVariable UUID vehicleId,
            @Valid
            @RequestBody Camera camera
    ) {return cameraService.updateCameraSensorData(vehicleId, camera);}
}
