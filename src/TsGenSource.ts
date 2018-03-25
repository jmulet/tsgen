import { TsGenImport } from "./TsGenImport";
import { TsGenClass } from "./TsGenClass";
import { TsGenFunc } from "./TsGenFunc";
import * as fs from 'fs'; 
import { flatenArrayTree, Treeable } from "./TsGenUtil";

export interface TsGenSourceOptions {
    indent: string;
}

export class TsGenSource implements Treeable {
    opts: any;
    private path: string;
    private imports: Array<TsGenImport>;  
    private classes: Array<TsGenClass>;
    private functions: Array<TsGenFunc>;

    constructor(path: string, opts?: TsGenSourceOptions) {
        this.path = path;
        this.imports = new Array<TsGenImport>();
        this.classes = new Array<TsGenClass>();
        this.functions = new Array<TsGenFunc>();
        this.opts = opts || {};
        this.opts.indent = this.opts.indent || "   ";
    }
    addImport(tsGenImport: TsGenImport) {
        // Check if not already defined
        tsGenImport.importables.forEach( (e) =>  {
            const found = this.imports.filter((imp) => imp.has(e)).length;
            if (found === 0) {
                // Now check if a new import is required or can be appended to a given one
                const lines = this.imports.filter( (x) => x.fromSource === tsGenImport.fromSource);
                if (lines.length === 0) {
                    this.imports.push(tsGenImport);
                } else {
                    lines[0].addImportable(tsGenImport);
                }
            } else {
                console.log("Error: TsGenSource.addImport ", e, " already imported." );
            }

        });
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

    toString(level: number = 0): string {
        return flatenArrayTree(this.toArrayTree(), level, this.opts.indent);
    }

    toArrayTree(): Array<any> {
        const bloc1 = this.imports.map( (imp) => imp.toArrayTree() );
        const bloc2 = this.functions.map( (fun) => fun.toArrayTree()  );
        const bloc3 = this.classes.map( (clazz) => clazz.toArrayTree() );
        const blocs = [...bloc1, "", ...bloc2, ...bloc3];        
        return blocs;
    }

    async save() {
        const src = this.toString(); 
        fs.writeFileSync(this.path, src); 
    }
}