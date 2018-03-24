export declare class TsGenParam {
    name: string;
    type: string;
    optional: boolean;
    visibility: "" | "public" | "private";
    constructor(name: string, type?: string, optional?: boolean, visibility?: "" | "public" | "private");
    toString(): string;
}
