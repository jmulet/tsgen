import { TsGenParam } from "./TsGenParam";
export declare class TsGenConstructor {
    private parameters;
    private body;
    addParameter(param: TsGenParam): void;
    addToBody(sentence: any): void;
    toString(): string;
}
