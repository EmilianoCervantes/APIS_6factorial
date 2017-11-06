export class Device {
    public id: number;
    public name: string;
    public type: string;
    public measure: string;
    public date: string;
    public time: string;

    constructor(id: number, name: string, type: string, measure: string, date: string, time: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.measure = measure;
        this.date = date;
        this.time = time;
    }
}