import { TsGenParam } from "./TsGenParam";
export interface Treeable {
    toArrayTree: Function;
}
export declare function printParameters(parameters: TsGenParam[]): string;
export declare function flatenArrayTree(array: Array<any>, level?: number, indent?: string): string;
