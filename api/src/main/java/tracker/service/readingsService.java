package tracker.service;
import tracker.entity.readings;

import java.util.List;
/**
 * Created by Shetty on 6/1/2017.
 */
public interface readingsService {

    List<readings> findAll();
    readings create(readings reading);
    void delete(String vin);
}