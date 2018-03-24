import { TsGenParam } from "./TsGenParam";

export function printParameters(parameters: TsGenParam[]): string {
    const bloc1 = parameters.filter( p => !p.optional).map( p => p.toString());
    const bloc2 = parameters.filter( p => p.optional).map( p => p.toString());
    return [...bloc1, ...bloc2].join(", ");
}