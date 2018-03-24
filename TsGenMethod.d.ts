import { TsGenParam } from "./TsGenParam";
export declare class TsGenMethod {
    name: string;
    visibility: "" | "public" | "private";
    returns: string;
    private parameters;
    private body;
    private decorators;
    constructor(name: any, visibility?: "" | "public" | "private", returns?: string);
    addParameter(param: TsGenParam): void;
    addToBody(sentence: any): void;
    addToDecorator(decorator: any): void;
    toString(): string;
}
