import { flatenArrayTree, Treeable } from "./TsGenUtil";

export interface TsGenParamOptions {
    optional?: boolean;
    visibility?: "" | "public" | "private";
    initial?: string;
}

export class TsGenParam implements Treeable {
    name: string;
    type: string; 
    opts: TsGenParamOptions;

    constructor(name: string, type?: string, opts?: TsGenParamOptions){
        this.name = name;
        this.type = type || "any";
        this.opts = opts || {};
        this.opts.visibility = this.opts.visibility || "";        
        if (this.opts.initial) {
            this.opts.optional = true;
        }
    }

    toString(indent: number = 0): string {
        return Array(indent+1).join("\t") + this.toArrayTree()[0];
    }

    toArrayTree(): Array<string> {
        const visibility = this.opts.visibility? (this.opts.visibility + " ") : "";
        let questionMark = "";
        if (!this.opts.initial) {
            questionMark = this.opts.optional? "?" : "";
        }
        let initial = "";
        if (this.opts.initial) {
            initial = " = " + this.opts.initial;
        }
        return [
            visibility + this.name + questionMark + ": "+ this.type + initial
        ];
    } 
}