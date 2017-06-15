package cartracker.service;

import cartracker.entity.Alert;
import cartracker.entity.Vehicle;
import cartracker.entity.Reading;

import java.util.List;

public interface AlertService {

    void createAlert(Reading reading, Vehicle vehicle);

    List<Alert> getAllAlertsOfAVehicle(String vin);

    List<Alert> getAllAlerts();
}