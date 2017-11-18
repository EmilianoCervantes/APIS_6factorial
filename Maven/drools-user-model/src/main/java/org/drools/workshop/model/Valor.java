

package org.drools.workshop.model;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author alfredinator
 */
@XmlRootElement
public class Valor {
  private Habitacion habitacion;
  private int consumo;
  private double hora;

  public Valor(){}

  public Valor(Habitacion habitacion, int consumo, double hora){
    this.habitacion = habitacion;
    this.consumo = consumo;
    this.hora = hora;
  }

  public Integer getConsumo() {
      return consumo;
  }

  public void setConsumo(Integer consumo) {
      this.consumo = consumo;
  }

  public double getHora() {
      return hora;
  }

  public void setHora(double hora) {
      this.hora = hora;
  }


  public Habitacion gethabitacion() {
      return habitacion;
  }

  public void setHabitacion(Habitacion habitacion) {
      this.habitacion = habitacion;
  }


  @Override
  public String toString() {
      return "Valor{" + "habitacion=" + habitacion + ", consumo=" + consumo +
      ", hora=" + hora +'}';
  }

}
