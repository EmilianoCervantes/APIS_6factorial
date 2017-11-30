package org.drools.workshop.model;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alfredinator
 */
@XmlRootElement
public class Dispositivo {

  private Integer idDispositivo;
  private String nombreDispositivo;
  private boolean estado; //prendido/apagado
  private String modo;//caliente/frio
  private Integer intensidad;//1,2,3
  private Integer idForaneoHabitacion;

  public Dispositivo(){}

  public Dispositivo(Integer id, String nombre, boolean estado,
    String modo, Integer intensidad, Integer idForaneo){
	  this.idDispositivo = id;
	  this.nombreDispositivo = nombre;
    this.estado = estado;
    this.modo = modo;
    this.intensidad = intensidad;
	  this.idForaneoHabitacion = idForaneo;
  }

  public Integer getIdDispositivo() {
      return idDispositivo;
  }

  public void setIdDispositivo(Integer id) {
      this.idDispositivo = id;
  }

  public String getNombreDispositivo() {
      return nombreDispositivo;
  }

  public void setNombreDispositivo(String nombre) {
      this.nombreDispositivo = nombre;
  }

  public boolean getEstado() {
      return estado;
  }
  public void setEstado(boolean estado) {
      this.estado = estado;
  }

  public String getModo() {
      return modo;
  }
  public void setModo(String modo) {
      this.modo = modo;
  }

  public Integer getIntensidad() {
      return intensidad;
  }
  public void setIntensidad(Integer intensidad) {
      this.intensidad = intensidad;
  }

  public Integer getIdForaneoHabitacion() {
      return idForaneoHabitacion;
  }

  public void setIdForaneoHabitacion(Integer id) {
      this.idForaneoHabitacion = id;
  }



  @Override
  public String toString() {
      return "Dispositivo{" + "id=" + idDispositivo + ", nombre=" + nombreDispositivo +
      ", estado=" + estado + ", modo=" + modo + ", intensidad=" + intensidad + '}';
  }

}
