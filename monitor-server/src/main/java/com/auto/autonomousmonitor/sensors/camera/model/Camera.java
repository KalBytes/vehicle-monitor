package com.auto.autonomousmonitor.sensors.camera.model;

import com.auto.autonomousmonitor.models.AuditModel;
import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.UUID;

public class Camera  {

    @NotNull(message = "camInfoA is required")
    private int camInfoA;

    @NotNull(message = "camInfoB is required")
    private int camInfoB;

    UUID vehicleId;

    public int getCamInfoA() {
        return camInfoA;
    }

    public void setCamInfoA(int camInfoA) {
        this.camInfoA = camInfoA;
    }

    public int getCamInfoB() {
        return camInfoB;
    }

    public void setCamInfoB(int camInfoB) {
        this.camInfoB = camInfoB;
    }

    public UUID getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(UUID vehicleId) {
        this.vehicleId = vehicleId;
    }
}
