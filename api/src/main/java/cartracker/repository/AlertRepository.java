package cartracker.repository;

import cartracker.entity.Alert;

import java.util.List;


public interface AlertRepository {

    Alert storeAlert(Alert alert);

    List<Alert> findAllAlertsOfAVehicle(String vin);
}