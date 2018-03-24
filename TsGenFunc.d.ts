import { TsGenMethod } from "./TsGenMethod";
export declare class TsGenFunc extends TsGenMethod {
    exportable: boolean;
    constructor(name: string, visibility?: "" | "public" | "private", exportable?: boolean);
    toString(): string;
}
