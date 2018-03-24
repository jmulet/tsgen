import { TsGenMethod } from "./TsGenMethod";

export class TsGenFunc extends TsGenMethod {
    exportable: boolean;

    constructor(name: string, visibility?: "" | "public" | "private", exportable?: boolean) {
        super(name, visibility);  
        this.exportable = exportable;
    }

    toString(): string {
         return (this.exportable? "export ": "") + super.toString();
    }
}