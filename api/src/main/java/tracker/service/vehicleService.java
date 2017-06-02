package tracker.service;
import tracker.entity.vehicle;

import java.util.List;
/**
 * Created by Shetty on 6/1/2017.
 */
public interface vehicleService {
    List<vehicle>  findAll();
    vehicle create(vehicle[] vhcl);
    void delete(String para);
}
