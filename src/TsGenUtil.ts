import { TsGenParam } from "./TsGenParam";

export interface Treeable {
    toArrayTree: Function;
}
 
export function printParameters(parameters: TsGenParam[]): string {
    const bloc1 = parameters.filter( p => !p.opts.optional).map( p => p.toString());
    const bloc2 = parameters.filter( p => p.opts.optional).map( p => p.toString());
    return [...bloc1, ...bloc2].join(", ");
}

export function flatenArrayTree(array: Array<any>, level?: number, indent?: string): string {
    level = level || 0;
    indent = indent || "   ";
    let str = "";
    array.forEach((e)=> {
        if (Array.isArray(e)) {
            str += flatenArrayTree(e, level + 1, indent);
        } else {
            str += Array(level).join(indent) + e + "\n";
        }
    });
    return str;
}