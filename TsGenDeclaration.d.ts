import { Treeable } from "./TsGenUtil";
export declare class TsGenDeclaration implements Treeable {
    initial: string;
    name: string;
    type: string;
    constructor(name: string, type: string, initial?: string);
    toString(indent?: number): string;
    toArrayTree(): string[];
}
