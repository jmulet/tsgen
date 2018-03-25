import { TsGenParam } from "./TsGenParam";
import { printParameters, flatenArrayTree, Treeable } from "./TsGenUtil";

export class TsGenConstructor implements Treeable {
    private parameters = new Array<TsGenParam>();
    private body: Treeable[] = [];
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
    toString(indent: number = 0): string {
        return flatenArrayTree(this.toArrayTree(), indent);
    }
    toArrayTree(): Array<any> {
        const header = "constructor(" + printParameters(this.parameters) + ") {";
        return [ header, 
                        this.body.map(s => s.toArrayTree? s.toArrayTree() : s),
                 "}"];
    }
}
