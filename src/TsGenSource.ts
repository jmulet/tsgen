import { TsGenImport } from "./TsGenImport";
import { TsGenClass } from "./TsGenClass";
import { TsGenFunc } from "./TsGenFunc";
import * as fs from 'fs';

export class TsGenSource {
    private path: string;
    private imports: Array<TsGenImport>;  
    private classes: Array<TsGenClass>;
    private functions: Array<TsGenFunc>;

    constructor(path: string) {
        this.path = path;
        this.imports = new Array<TsGenImport>();
        this.classes = new Array<TsGenClass>();
        this.functions = new Array<TsGenFunc>();
    }
    addImport(tsGenImport: TsGenImport) {
        // Check if not already defined
        const found = this.imports.filter((imp) => tsGenImport.importable === imp.importable).length;
        if (found === 0) {
            this.imports.push(tsGenImport);
        } else {
            console.log("Error: TsGenSource.addImport ", tsGenImport.importable, " already imported." );
        }
    }

    addClass(tsGenClass: TsGenClass) {
        // Check if not already defined
        const found = this.classes.filter((c) => tsGenClass.name === c.name).length;
        if (found === 0) {
            this.classes.push(tsGenClass);
        } else {
            console.log("Error: TsGenSource.addClass ", tsGenClass.name, " already defined." );
        }
    }

    addFunction(tsGenFunc: TsGenFunc) {
        // Check if not already defined
        const found = this.functions.filter((c) => tsGenFunc.name === c.name).length;
        if (found === 0) {
            this.functions.push(tsGenFunc);
        } else {
            console.log("Error: TsGenSource.addFunction ", tsGenFunc.name, " already defined." );
        }
    }

    toString(): string {
        const bloc1 = this.imports.map( (imp) => imp.toString() );
        const bloc2 = this.functions.map( (c) => c.toString() + "\n" );
        const bloc3 = this.classes.map( (c) => c.toString()  + "\n" );
        const blocs = [... bloc1, ...[""], ...bloc2, ...bloc3];
        return blocs.join("\n");
    }

    save(): void {
        fs.writeFileSync(this.path, this.toString());
    }
}