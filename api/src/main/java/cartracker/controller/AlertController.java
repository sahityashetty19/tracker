package cartracker.controller;

import cartracker.entity.Alert;
import cartracker.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "alerts")
public class AlertController {
    @Autowired
    private AlertService alertService;


    @RequestMapping(value = "{vin}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Alert> getAlertsOfAVehicle(@PathVariable("vin") String vin) {
        System.out.println("Alert called.");
        if (alertService.getAllAlertsOfAVehicle(vin) == null) {
            System.out.println("Alert not found");
        }
        return alertService.getAllAlertsOfAVehicle(vin);
    }
}