import { TsGenImport } from "./TsGenImport";
import { TsGenClass } from "./TsGenClass";
import { TsGenFunc } from "./TsGenFunc";
import { Treeable } from "./TsGenUtil";
export interface TsGenSourceOptions {
    indent: string;
}
export declare class TsGenSource implements Treeable {
    opts: any;
    private path;
    private imports;
    private classes;
    private functions;
    constructor(path: string, opts?: TsGenSourceOptions);
    addImport(tsGenImport: TsGenImport): void;
    addClass(tsGenClass: TsGenClass): void;
    addFunction(tsGenFunc: TsGenFunc): void;
    toString(level?: number): string;
    toArrayTree(): Array<any>;
    save(): Promise<void>;
}
