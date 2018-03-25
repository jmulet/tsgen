import { TsGenParam } from "./TsGenParam";
import { Treeable } from "./TsGenUtil";
export declare class TsGenMethod implements Treeable {
    name: string;
    visibility: "" | "public" | "private" | "protected";
    returns: string;
    protected parameters: TsGenParam[];
    protected body: Treeable[];
    protected decorators: string[];
    constructor(name: any, visibility?: "" | "public" | "private" | "protected", returns?: string);
    addParameter(param: TsGenParam): void;
    addToBody(sentence: any): void;
    addDecorator(decorator: any): void;
    toString(indent?: number): string;
    toArrayTree(): Array<any>;
}
