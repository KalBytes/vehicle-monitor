package com.auto.autonomousmonitor.sensors.radar.services;

import com.auto.autonomousmonitor.sensors.radar.model.Radar;
import com.auto.autonomousmonitor.status.models.Status;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class WebSocketUpdateRadarService {

    private final SimpMessagingTemplate messagingTemplate;

    @Value("${application.ws.radar}")
    private String WSRadarPath;

    public WebSocketUpdateRadarService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendUpdate(Radar radarSensorData) {
        messagingTemplate.convertAndSend(WSRadarPath, radarSensorData);
    }
}
