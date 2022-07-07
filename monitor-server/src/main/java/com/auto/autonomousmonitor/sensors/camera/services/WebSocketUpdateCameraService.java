package com.auto.autonomousmonitor.sensors.camera.services;

import com.auto.autonomousmonitor.sensors.camera.model.Camera;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class WebSocketUpdateCameraService {
    private final SimpMessagingTemplate messagingTemplate;

    @Value("${application.ws.camera}")
    private String WSCameraPath;

    public WebSocketUpdateCameraService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendUpdate(Camera cameraSensorData) {
        messagingTemplate.convertAndSend(WSCameraPath, cameraSensorData);
    }
}
