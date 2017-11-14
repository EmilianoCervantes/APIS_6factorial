package org.drools.workshop.endpoint.impl;

import java.util.ArrayList;
import java.util.List;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import org.drools.workshop.model.*;

import org.drools.workshop.endpoint.api.SensorService;
import org.kie.api.cdi.KReleaseId;
import org.kie.api.cdi.KSession;
import org.kie.api.runtime.KieSession;

/**
 *
 * @author alfredinator
 */
@ApplicationScoped
public class SensorServiceImpl implements SensorService {

    @Inject
    @KReleaseId(groupId = "org.drools.workshop", artifactId = "drools-user-kjar", version = "1.0-SNAPSHOT")
    @KSession
    private KieSession kSession;

    public SensorServiceImpl() {
    }
/* Crea Habitaciones*/
    @Override
    public Habitacion crea(Habitacion habitacion) {
        System.out.println(">> kSession: " + kSession);
        printKieSessionAllFacts(kSession);
        System.out.println(">> Habitacion: " + habitacion);
        kSession.insert(habitacion);
        int fired = kSession.fireAllRules();
        System.out.println(">> Fired: " + fired);
        return habitacion;

    }

    @Override
    public List<Habitacion> getHabitaciones() {
        List<Habitacion> habitaciones = new ArrayList<Habitacion>();
        for (Object o : kSession.getObjects()) {
            if (o instanceof Habitacion) {
                habitaciones.add((Habitacion) o);
            }
        }
        return habitaciones;
    }

/* Crea Dispositivos */
    @Override
    public Dispositivo crea(Dispositivo dispositivo) {
        System.out.println(">> kSession: " + kSession);
        printKieSessionAllFacts(kSession);
        System.out.println(">> Dispositivo: " + dispositivo);
        kSession.insert(dispositivo);
        int fired = kSession.fireAllRules();
        System.out.println(">> Fired: " + fired);
        return dispositivo;

    }

    @Override
    public List<Dispositivo> getDispositivos() {
        List<Dispositivo> dispositivos = new ArrayList<Dispositivo>();
        for (Object o : kSession.getObjects()) {
            if (o instanceof Dispositivo) {
                dispositivos.add((Dispositivo) o);
            }
        }
        return dispositivos;
    }

/* Crea Mediciones */
    @Override
    public Medicion crea(Medicion medicion) {
        System.out.println(">> kSession: " + kSession);
        printKieSessionAllFacts(kSession);
        System.out.println(">> Medicion: " + medicion);
        kSession.insert(medicion);
        int fired = kSession.fireAllRules();
        System.out.println(">> Fired: " + fired);
        return medicion;

    }

    @Override
    public List<Medicion> getMediciones() {
        List<Medicion> mediciones = new ArrayList<Medicion>();
        for (Object o : kSession.getObjects()) {
            if (o instanceof Medicion) {
                mediciones.add((Medicion) o);
            }
        }
        return mediciones;
    }


    private void printKieSessionAllFacts(KieSession kSession) {
        System.out.println(" >> Start - Printing All Facts in the Kie Session");
        for (Object o : kSession.getObjects()) {
            System.out.println(">> Fact: " + o);
        }
        System.out.println(" >> End - Printing All Facts in the Kie Session");
    }

}
