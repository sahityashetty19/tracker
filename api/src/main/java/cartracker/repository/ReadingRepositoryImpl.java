package cartracker.repository;

import cartracker.entity.Reading;
import cartracker.entity.Alert;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;


@Repository
public class ReadingRepositoryImpl implements ReadingRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Reading storeReading(Reading reading) {
        entityManager.persist(reading);
        return reading;
    }

    @Override
    public List<Reading> findReadingsOfAVehicle(String vin) {
        TypedQuery<Reading> query = entityManager.createNamedQuery("Reading.findReadingsOfSingleVehicle", Reading.class);
        query.setParameter("vin", vin);
        List<Reading> resultList = query.getResultList();
        return resultList;
    }
}