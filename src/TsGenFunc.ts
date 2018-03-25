import { TsGenMethod } from "./TsGenMethod";
import { printParameters, flatenArrayTree } from "./TsGenUtil";

export class TsGenFunc extends TsGenMethod {
    exportable: boolean;

    constructor(name: string, visibility?: "" | "public" | "private" | "protected", exportable?: boolean) {
        super(name, visibility);  
        this.exportable = exportable;
    }
 
    toString(indent: number = 0): string {
        return flatenArrayTree(this.toArrayTree(), indent);
    }

    toArrayTree(): Array<any> {
        const header =  (this.exportable? "export ": "") 
                            + (this.visibility? (this.visibility+" "): "") 
                            + this.name + "(" + printParameters(this.parameters) + ")"
                            + (this.returns? (": "+this.returns) : "" ) 
                            + " {";
        
             return [...this.decorators, header, 
                            this.body.map(s => s.toArrayTree()), 
                    "}"];
    }
}