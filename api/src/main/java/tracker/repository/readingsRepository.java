package tracker.repository;
import tracker.entity.Alert;
import tracker.entity.readings;
import tracker.entity.tiress;

import java.util.List;

/**
 * Created by Shetty on 6/1/2017.
 */

public interface readingsRepository {
    List<readings> findAll();
    List<readings> findByVin(String vin);
    void CreateAlert( String vin,String priority, String message);
    readings create(tiress tire, readings read);
    readings create(tiress tire, readings read, Alert obj);
    void delete(readings read);

}
