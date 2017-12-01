export class Device {
    public id: number;
    public nombre: string;
    public tipo: string;
    public medidas: string;
    public fecha: number;
    public hora: string;

    constructor(id: number, name: string, type: string, measure: string, date: string, time: string) {
        this.id = id;
        this.nombre = name;
        this.tipo = type;
        this.medidas = "measure";
        this.fecha = Date.now();
        this.hora = "time";
    }
}
