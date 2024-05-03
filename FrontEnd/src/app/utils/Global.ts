import {DatePipe} from "@angular/common";

export class Global {

    public static contarClaves(data: any): number {
        if(data === undefined)
            return 0;
        return Object.keys(data).length;
    }

    public static isNullOrUndefined(data: any): boolean {
        return data === null || data === undefined;
    }

    public static castDate(datePipe: DatePipe, fecha: string | Date): string {
        if(this.isNullOrUndefined(fecha)) {
            return '';
        } else {
            let tmpDate;
            if (typeof fecha === 'string') {
                tmpDate = new Date(fecha)
            } else {
                tmpDate = fecha;
            }
            return datePipe.transform(tmpDate, 'dd-MM-yyy hh:mm')!;
        }
    }

    public static castDateF2(datePipe: DatePipe, fecha: string | Date): string {
        if(this.isNullOrUndefined(fecha)) {
            return '';
        } else {
            let tmpDate;
            if (typeof fecha === 'string') {
                tmpDate = new Date(fecha)
            } else {
                tmpDate = fecha;
            }
            return datePipe.transform(tmpDate, 'yyy-MM-dd hh:mm:ss')!;
        }
    }
}
