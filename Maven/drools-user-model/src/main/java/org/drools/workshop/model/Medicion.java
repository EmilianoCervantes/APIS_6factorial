package org.drools.workshop.model;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alfredinator
 */
@XmlRootElement
public class Medicion {
  private Integer idMedicion;
  private Integer valor;
  private String fecha;
  private Integer hora;
  private Integer idForaneoSensor;

  public Integer getIdMedicion() {
      return idMedicion;
  }
  public void setIdMedicion(Integer id) {
      this.idMedicion = id;
  }

  public Integer getValor() {
      return valor;
  }
  public void setValor(Integer valor) {
      this.valor = valor;
  }

  public String getFecha() {
      return fecha;
  }
  public void setFecha(String fecha) {
      this.fecha = fecha;
  }

  public Integer getHora() {
      return hora;
  }
  public void setHora(Integer hora) {
      this.hora = hora;
  }

  public Integer getIdForaneoSensor() {
      return idForaneoSensor;
  }
  public void setIdForaneoSensor(Integer id) {
      this.idForaneoSensor = id;
  }

  @Override
  public String toString() {
      return "Medicion{" + "id=" + idMedicion + ", fecha=" + fecha + ", hora=" + hora + ", valor=" + valor +'}';
  }

}
