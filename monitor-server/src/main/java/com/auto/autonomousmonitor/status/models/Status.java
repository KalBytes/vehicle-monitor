package com.auto.autonomousmonitor.status.models;

import com.auto.autonomousmonitor.vehicle.model.Vehicle;

import javax.validation.constraints.NotNull;
import java.util.UUID;

public class Status {
    UUID vehicleId;

    @NotNull(message = "speed is required")
    int speed;

    @NotNull(message = "temperature is required")
    int temperature;

    @NotNull(message = "currentLatitude is required")
    float currentLatitude;

    @NotNull(message = "currentLongitude is required")
    float currentLongitude;

    public UUID getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(UUID vehicleId) {
        this.vehicleId = vehicleId;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    public float getCurrentLatitude() {
        return currentLatitude;
    }

    public void setCurrentLatitude(float currentLatitude) {
        this.currentLatitude = currentLatitude;
    }

    public float getCurrentLongitude() {
        return currentLongitude;
    }

    public void setCurrentLongitude(float currentLongitude) {
        this.currentLongitude = currentLongitude;
    }
}
