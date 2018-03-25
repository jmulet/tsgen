import { TsGenClassOptions } from "./TsGenClassOptions";
import { TsGenDeclaration } from "./TsGenDeclaration";
import { TsGenMethod } from "./TsGenMethod";
import { TsGenConstructor } from "./TsGenConstructor";
import { Treeable } from "./TsGenUtil";
export declare class TsGenClass implements Treeable {
    options: TsGenClassOptions;
    name: string;
    private declarations;
    private methods;
    private constructorDef;
    private decorators;
    constructor(name: string, options?: TsGenClassOptions);
    setConstructor(constructorDef: TsGenConstructor): void;
    addDeclaration(declaration: TsGenDeclaration): void;
    addMethod(method: TsGenMethod): void;
    addDecorator(decorator: string): void;
    toString(indent?: number): string;
    toArrayTree(): Array<any>;
}
