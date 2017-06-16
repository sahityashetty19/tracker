package cartracker.service;

import cartracker.entity.Reading;
import java.util.List;

public interface ReadingService {

    Reading putReading(Reading reading);

    List<Reading> getAllReadingsOfAVehicle(String vin);
}