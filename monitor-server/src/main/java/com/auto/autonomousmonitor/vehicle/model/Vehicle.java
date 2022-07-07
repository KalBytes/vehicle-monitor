package com.auto.autonomousmonitor.vehicle.model;

import com.auto.autonomousmonitor.models.AuditModel;
import com.auto.autonomousmonitor.sensors.camera.model.Camera;
import com.auto.autonomousmonitor.sensors.radar.model.Radar;
import com.auto.autonomousmonitor.vehicle.EModel;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.UUID;

@Entity
public class Vehicle extends AuditModel {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private UUID id;

    @NotNull(message = "model is required")
    private EModel model;

    @NotNull(message = "licensePlate is required")
    @Size(min = 3, max = 20)
    private String licensePlate;

    private String image;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public EModel getModel() {
        return model;
    }

    public void setModel(EModel model) {
        this.model = model;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
