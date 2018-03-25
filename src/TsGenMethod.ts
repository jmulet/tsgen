import { TsGenParam } from "./TsGenParam";
import { printParameters, flatenArrayTree, Treeable } from "./TsGenUtil";

export class TsGenMethod implements Treeable {
    name: string;
    visibility: "" | "public" | "private" | "protected";
    returns: string;
    protected parameters: TsGenParam[];
    protected body: Treeable[] = [];
    protected decorators: string[] = [];

    constructor(name, visibility?: "" | "public" | "private" | "protected", returns?: string) {
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

    addDecorator(decorator: any) {
        this.decorators.push(decorator);
    }

    toString(indent: number = 0): string {
        return flatenArrayTree(this.toArrayTree(), indent);
    }

    toArrayTree(): Array<any> {
        
        const header =  (this.visibility? (this.visibility+" "): "") 
                        + this.name + "(" + printParameters(this.parameters) + ")"
                        + (this.returns? (": "+this.returns) : "" ) 
                        + " {";
    
        const body =  this.body.map(s => s.toArrayTree? s.toArrayTree() : s);   
             
        return  [...this.decorators, header, body, "}"];            
    }
}