import { TsGenParam } from "./TsGenParam";
import { Treeable } from "./TsGenUtil";
export declare class TsGenConstructor implements Treeable {
    private parameters;
    private body;
    addParameter(param: TsGenParam): void;
    addToBody(sentence: any): void;
    toString(indent?: number): string;
    toArrayTree(): Array<any>;
}
