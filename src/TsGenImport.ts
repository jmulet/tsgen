export class TsGenImport {
    importable: string;
    fromSource: string;

    constructor(importable: string, fromSource: string) {
        this.importable = importable;
        this.fromSource = fromSource; 
    }

    toString(): string {
        if (this.importable.indexOf("*") >= 0) {
            return "import " + this.importable + " from '" + this.fromSource + "'"; 
        } else {
            return "import { " + this.importable + " } from '" + this.fromSource + "'"; 
        }
        
    }
}