package org.drools.workshop.endpoint.api;

import java.util.List;
import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import org.drools.workshop.model.*;

/**
 *
 * @author alfredinator
 */
@Path("sensores")
public interface SensorService {
    @POST
    @Consumes("application/json")
    @Produces("application/json")
    @Path("/crea-habitacion")
    public Habitacion crea(@NotNull Habitacion habitacion);


    @GET
    @Produces("application/json")
    @Path("/habitaciones")
    public List<Habitacion> getHabitaciones();

    @POST
    @Consumes("application/json")
    @Produces("application/json")
    @Path("/crea-dispositivo")
    public Dispositivo crea(@NotNull Dispositivo dispositivo);

    @GET
    @Produces("application/json")
    @Path("/dispositivos")
    public List<Dispositivo> getDispositivos();

    @POST
    @Consumes("application/json")
    @Produces("application/json")
    @Path("/crea-sensor")
    public Sensor crea(@NotNull Sensor sensor);

    @GET
    @Produces("application/json")
    @Path("/sensores")
    public List<Sensor> getSensores();

    @POST
    @Consumes("application/json")
    @Produces("application/json")
    @Path("/crea-medicion")
    public Medicion crea(@NotNull Medicion medicion);

    @GET
    @Produces("application/json")
    @Path("/mediciones")
    public List<Medicion> getMediciones();

    @GET
    @Produces("application/json")
    @Path("/valores")
    public List<Valor> getValores();
}
