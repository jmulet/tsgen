import { Treeable } from "./TsGenUtil";
export declare enum AngularImports {
    "HttpClient" = 0,
    "HttpParams" = 1,
    "Injectable" = 2,
    "FormGroup" = 3,
}
export declare class TsGenImport implements Treeable {
    importables: string[];
    fromSource: string;
    constructor(importable: string, fromSource: string);
    toString(indent?: number): string;
    addImportable(imp: TsGenImport): void;
    has(importable: string): boolean;
    toArrayTree(): Array<any>;
    static fromAngular(id: number): TsGenImport;
}
