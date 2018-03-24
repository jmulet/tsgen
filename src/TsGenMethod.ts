import { TsGenParam } from "./TsGenParam";
import { printParameters } from "./TsGenUtil";

export class TsGenMethod {
    name: string;
    visibility: "" | "public" | "private";
    returns = "";
    private parameters: TsGenParam[];
    private body = [];
    private decorators: string[] = [];

    constructor(name, visibility?: "" | "public" | "private", returns?: string) {
        this.parameters = new Array<TsGenParam>();
        this.name = name;
        this.visibility = visibility || "";
        this.returns = returns || "";
    }

    addParameter(param: TsGenParam) {
        // Check if not already defined
        const found = this.parameters.filter((p) => param.name === p.name).length;
        if (found === 0) {
            this.parameters.push(param);
        } else {
            console.log("Error: TsGenMethod.addParameter ", param.name, " already defined." );
        }
    }

    addToBody(sentence: any) {
        this.body.push(sentence);
    }

    addToDecorator(decorator: any) {
        this.decorators.push(decorator);
    }

    toString() {
        const bloc1 = [ (this.visibility? this.visibility: "") 
                        + this.name + "(" + printParameters(this.parameters) + ")"+
                        + (this.returns? (": "+this.returns) : "" ) 
                        + " {"
        ]; 
        
        return [...this.decorators, ...bloc1, ...this.body.map(s=>s.toString() || s), ...["}"]].join("\n");
    }
}