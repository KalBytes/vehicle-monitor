package com.auto.autonomousmonitor.sensors.radar.controllers;

import com.auto.autonomousmonitor.sensors.radar.model.Radar;
import com.auto.autonomousmonitor.sensors.radar.services.RadarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/api/vehicle/{vehicleId}/radar")
public class RadarController {
    @Autowired
    RadarService radarService;

    @PostMapping("")
    public Radar updateCameraSensorData(
            @PathVariable UUID vehicleId,
            @Valid
            @RequestBody Radar radar
    ) {return radarService.updateRadarSensorData(vehicleId, radar);}
}
