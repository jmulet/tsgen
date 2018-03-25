import { Treeable } from "./TsGenUtil";

export class TsGenDeclaration implements Treeable {
    initial: string;
    name: string;
    type: string;

    constructor(name: string, type: string, initial?: string) {
        this.name = name;
        this.type = type;
        this.initial = initial;
    }

    toString(indent: number = 0): string {
        return Array(indent+1).join("\t") + this.toArrayTree()[0];
    }

    toArrayTree() {
        return [this.name + (this.type? (": " + this.type) : (this.initial? "": ": any")) + (this.initial? (" = " + this.initial) : "") + ";"];
    }
}