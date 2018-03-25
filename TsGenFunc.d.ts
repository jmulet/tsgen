import { TsGenMethod } from "./TsGenMethod";
export declare class TsGenFunc extends TsGenMethod {
    exportable: boolean;
    constructor(name: string, visibility?: "" | "public" | "private" | "protected", exportable?: boolean);
    toString(indent?: number): string;
    toArrayTree(): Array<any>;
}
