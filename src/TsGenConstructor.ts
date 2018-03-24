import { TsGenParam } from "./TsGenParam";
import { printParameters } from "./TsGenUtil";

export class TsGenConstructor {
    private parameters = new Array<TsGenParam>();
    private body = [];
    addParameter(param: TsGenParam) {
        // Check if not already defined
        const found = this.parameters.filter((p) => param.name === p.name).length;
        if (found === 0) {
            this.parameters.push(param);
        } else {
            console.log("Error: TsGenConstructor.addParameter ", param.name, " already defined." );
        }
    }
    addToBody(sentence: any) {
        this.body.push(sentence);
    } 
    toString() {
        const bloc1 = [ "constructor(" + printParameters(this.parameters) + ") {"
        ]; 
        
        return [...bloc1, ...this.body.map(s=>s.toString() || s), ...["}"]].join("\n");
    }
}
