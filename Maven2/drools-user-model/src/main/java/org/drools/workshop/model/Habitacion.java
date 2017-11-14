package org.drools.workshop.model;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alfredinator
 */
@XmlRootElement
public class Habitacion {

  private Integer idHabitacion;
  private String nombreHabitacion;
  private Integer piso;

  public Habitacion(){}

  public Integer getIdHabitacion() {
      return idHabitacion;
  }

  public void setIdHabitacion(Integer id) {
      this.idHabitacion = id;
  }

  public String getNombreHabitacion() {
      return nombreHabitacion;
  }

  public void setNombreHabitacion(String nombre) {
      this.nombreHabitacion = nombre;
  }

  public Integer getPiso() {
      return piso;
  }

  public void setPIso(Integer piso) {
      this.piso = piso;
  }



  @Override
  public String toString() {
      return "Habitacion{" + "id=" + idHabitacion + ", nombre=" + nombreHabitacion +
      ", piso=" + piso + '}';
  }

}
