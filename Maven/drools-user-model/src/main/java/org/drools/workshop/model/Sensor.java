package org.drools.workshop.model;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alfredinator
 */
@XmlRootElement
public class Sensor {
  private Integer idSensor;
  private String nombreSensor;
  private Integer idForaneoHabitacion;
  private Integer idMedicionActual;

  public Sensor(){}

  public Sensor(Integer id, String nombre, Integer idHab, Integer idMed){
    this.idSensor = id;
    this.nombreSensor = nombre;
    this.idForaneoHabitacion = idHab;
    this.idMedicionActual = idMed;
  }

  public Integer getIdSensor() {
      return idSensor;
  }
  public void setIdSensor(Integer id) {
      this.idSensor = id;
  }

  public String getNombreSensor() {
      return nombreSensor;
  }
  public void setNombreSensor(String nombre) {
      this.nombreSensor = nombre;
  }

  public Integer getIdForaneoHabitacion() {
      return idForaneoHabitacion;
  }
  public void setIdForaneoHabitacion(Integer id) {
      this.idForaneoHabitacion = id;
  }

  public Integer getIdMedicionActual() {
      return idMedicionActual;
  }
  public void setIdMedicionActual(Integer id) {
      this.idMedicionActual = id;
  }

  @Override
  public String toString() {
      return "Sensor{" + "id=" + idSensor + ", nombre=" + nombreSensor +'}';
  }

}
