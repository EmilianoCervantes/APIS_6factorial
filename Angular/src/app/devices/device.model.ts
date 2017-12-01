export class Device {
    public idDispositivo: number;
    public nombreDispositivo: string;
    public estado: boolean;
    public modo: string;
    public intensidad: number;
    public idForaneoHabitacion: number;

    constructor(idDispositivo: number, nombreDispositivo: string, estado: boolean, modo: string, intensidad: number, idForaneoHabitacion: number) {
        this.idDispositivo = idDispositivo;
        this.nombreDispositivo = name;
        this.estado = estado;
        this.modo = modo;
        this.intensidad = intensidad;
        this.idForaneoHabitacion = idForaneoHabitacion;
    }
}