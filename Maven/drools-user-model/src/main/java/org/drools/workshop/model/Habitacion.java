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
  private boolean ventana;

  public Habitacion(){}

  public Habitacion(Integer id, String nombre, Integer piso, boolean ventana){
    this.idHabitacion = id;
    this.nombreHabitacion = nombre;
    this.piso = piso;
    this.ventana = ventana;
  }

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

  public boolean getVentana() {
      return ventana;
  }

  public void setVentana(boolean ventana) {
      this.ventana = ventana;
  }


  @Override
  public String toString() {
      return "Habitacion{" + "id=" + idHabitacion + ", nombre=" + nombreHabitacion +
      ", piso=" + piso + ", tiene ventana=" + ventana + '}';
  }

}
