export class Device {
    public idDispositivo: number;
    public nombreDispositivo: string;
    public tipoDispositivo: string;
    public measure: string;
    public date: string;
    public time: string;

    constructor(id: number, name: string, type: string, measure: string, date: string, time: string) {
        this.idDispositivo = id;
        this.nombreDispositivo = name;
        this.tipoDispositivo = type;
        this.measure = "measure";
        this.date = "date";
        this.time = "time";
    }
}
