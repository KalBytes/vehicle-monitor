package com.auto.autonomousmonitor.components;

import com.auto.autonomousmonitor.vehicle.services.VehicleMockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class LoadDataOnStartUp {

    @Autowired
    VehicleMockRepository vehicleMockRepository;

    @EventListener(ApplicationReadyEvent.class)
    public void loadData()
    {
       vehicleMockRepository.createMocks();
    }

}
