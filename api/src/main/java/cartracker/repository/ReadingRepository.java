package cartracker.repository;

import cartracker.entity.Reading;
import cartracker.entity.Vehicle;
import java.util.List;


public interface ReadingRepository {

    Reading storeReading(Reading reading);

    List<Reading> findReadingsOfAVehicle(String vin);
}