import { Treeable } from "./TsGenUtil";

export enum AngularImports {
    "HttpClient" = 0,
    "HttpParams" = 1,
    "Injectable" = 2,
    "FormGroup" = 3,
}

const AngularImportables = [
    {importable: 'HttpClient', fromSource: '@angular/common/http'},
    {importable: 'HttpParams', fromSource: '@angular/common/http'},
    {importable: 'Injectable', fromSource: '@angular/core'},
    {importable: 'FormGroup', fromSource: '@angular/forms'},
]

export class TsGenImport implements Treeable {
    importables: string[] = [];
    fromSource: string;

    constructor(importable: string, fromSource: string) {
        this.importables.push( importable );
        this.fromSource = fromSource; 
    }

    toString(indent: number = 0): string {
        return Array(indent+1).join("\t") + this.toArrayTree()[0];
    }

    addImportable(imp: TsGenImport) {
        if (imp.fromSource === this.fromSource) {
            imp.importables.forEach( (imp) => this.importables.push(imp) );
        }
    }

    has(importable: string) {
        return this.importables.indexOf(importable) >= 0;
    }

    toArrayTree(): Array<any> {
        if (this.importables.filter( (imp) => imp.indexOf("*") >= 0).length > 0) {
            return ["import " + this.importables.join(", ") + " from '" + this.fromSource + "';"]; 
        } else {
            return ["import { " + this.importables.join(", ") + " } from '" + this.fromSource + "';"]; 
        }
    }

    static fromAngular(id: number) {
        const found = AngularImportables[id];
        if (found) {
            return new TsGenImport(found.importable, found.fromSource);
        }
    }
}