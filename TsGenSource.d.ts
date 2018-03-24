import { TsGenImport } from "./TsGenImport";
import { TsGenClass } from "./TsGenClass";
import { TsGenFunc } from "./TsGenFunc";
export declare class TsGenSource {
    private path;
    private imports;
    private classes;
    private functions;
    constructor(path: string);
    addImport(tsGenImport: TsGenImport): void;
    addClass(tsGenClass: TsGenClass): void;
    addFunction(tsGenFunc: TsGenFunc): void;
    toString(): string;
    save(): void;
}
