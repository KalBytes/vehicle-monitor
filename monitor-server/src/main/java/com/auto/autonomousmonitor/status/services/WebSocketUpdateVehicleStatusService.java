package com.auto.autonomousmonitor.status.services;

import com.auto.autonomousmonitor.status.models.Status;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class WebSocketUpdateVehicleStatusService {
    private final SimpMessagingTemplate messagingTemplate;

    @Value("${application.ws.status}")
    private String WSStatusPath;

    public WebSocketUpdateVehicleStatusService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendUpdate(Status vehicleStatus) {
        messagingTemplate.convertAndSend(WSStatusPath, vehicleStatus);
    }
}
