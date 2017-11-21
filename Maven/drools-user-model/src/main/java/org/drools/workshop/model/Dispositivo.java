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
  private String tipoDispositivo;
  private Integer idForaneoHabitacion;

  public Dispositivo(){}

  public Dispositivo(Integer id, String nombre, String tipo, Integer idForaneo){
	  this.idDispositivo = id;
	  this.nombreDispositivo = nombre;
	  this.tipoDispositivo = tipo;
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

  public String getTipoDispositivo() {
      return tipoDispositivo;
  }

  public void setTipoDispositivo(String tipo) {
      this.tipoDispositivo = tipo;
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
      ", tipo=" + tipoDispositivo + '}';
  }

}
