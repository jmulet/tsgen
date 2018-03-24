export class TsGenParam {
    name: string;
    type: string;
    optional: boolean;
    visibility: "" | "public" | "private"

    constructor(name: string, type?: string, optional?: boolean, visibility?: "" | "public" | "private"){
        this.name = name;
        this.type = type || "any";
        this.optional = optional;
        this.visibility = visibility || "";
    }

    toString(): string {
        return (this.visibility? (this.visibility + " "):"") + this.name + (this.optional?"?":"") + ": "+ this.type;
    }
}