import { Treeable } from "./TsGenUtil";
export interface TsGenParamOptions {
    optional?: boolean;
    visibility?: "" | "public" | "private";
    initial?: string;
}
export declare class TsGenParam implements Treeable {
    name: string;
    type: string;
    opts: TsGenParamOptions;
    constructor(name: string, type?: string, opts?: TsGenParamOptions);
    toString(indent?: number): string;
    toArrayTree(): Array<string>;
}
