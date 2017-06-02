package tracker.repository;
import tracker.entity.vehicle;

import java.util.List;

/**
 * Created by Shetty on 6/1/2017.
 */

public interface vehiclerepository {
    List<vehicle> findAll();
    vehicle findByVin(String vin);
    void create(vehicle vcl);
    void update(vehicle vcl);
    void delete(vehicle para);
}
