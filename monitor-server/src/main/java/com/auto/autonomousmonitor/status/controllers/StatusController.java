package com.auto.autonomousmonitor.status.controllers;

import com.auto.autonomousmonitor.status.models.Status;
import com.auto.autonomousmonitor.status.services.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/api/vehicle/{vehicleId}/update")
public class StatusController {
    @Autowired
    StatusService statusService;

    @PostMapping("")
    public ResponseEntity<?> updateStatus(
            @PathVariable UUID vehicleId,
            @Valid
            @RequestBody
            Status status) {
        return statusService.updateStatus(vehicleId, status);
    }
}
