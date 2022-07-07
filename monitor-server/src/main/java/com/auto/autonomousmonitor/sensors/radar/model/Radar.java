package com.auto.autonomousmonitor.sensors.radar.model;

import com.auto.autonomousmonitor.models.AuditModel;
import com.auto.autonomousmonitor.vehicle.model.Vehicle;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.UUID;

public class Radar  {

    @NotNull(message = "RadarInfoA is required")
    private int RadarInfoA;

    @NotNull(message = "RadarInfoB is required")
    private int RadarInfoB;

    UUID vehicleId;

    public int getRadarInfoA() {
        return RadarInfoA;
    }

    public void setRadarInfoA(int radarInfoA) {
        RadarInfoA = radarInfoA;
    }

    public int getRadarInfoB() {
        return RadarInfoB;
    }

    public void setRadarInfoB(int radarInfoB) {
        RadarInfoB = radarInfoB;
    }

    public UUID getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(UUID vehicleId) {
        this.vehicleId = vehicleId;
    }

}
