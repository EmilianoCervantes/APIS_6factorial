package org.drools.workshop.model;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alfredinator
 */
@XmlRootElement
public class Medicion {
  private Integer idMedicion;
  private String tipoMedicion;
  private String fecha;
  private String hora;
  private Integer valor;
  private Integer idForaneoDispositivo;

  public Integer getIdMedicion() {
      return idMedicion;
  }

  public void setIdMedicion(Integer id) {
      this.idMedicion = id;
  }

  public String getTipoMedicion() {
      return tipoMedicion;
  }

  public void setTipoMedicion(String tipo) {
      this.tipoMedicion = tipo;
  }

  public String getFecha() {
      return fecha;
  }

  public void setFecha(String fecha) {
      this.fecha = fecha;
  }

  public String getHora() {
      return hora;
  }

  public void setHOra(String hora) {
      this.hora = hora;
  }

  public Integer getValor() {
      return valor;
  }

  public void setValor(Integer id) {
      this.valor = id;
  }

  public Integer getIdForaneoDispositivo() {
      return idForaneoDispositivo;
  }

  public void setIdForaneoDispositivo(Integer id) {
      this.idForaneoDispositivo = id;
  }

  @Override
  public String toString() {
      return "Medicion{" + "id=" + idMedicion + ", tipo=" + tipoMedicion +
      ", fecha=" + fecha + ", hora=" + hora + ", valor=" + valor +'}';
  }

}
