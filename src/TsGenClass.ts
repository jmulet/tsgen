import { TsGenClassOptions } from "./TsGenClassOptions";
import { TsGenDeclaration } from "./TsGenDeclaration";
import { TsGenMethod } from "./TsGenMethod";
import { TsGenConstructor } from "./TsGenConstructor";
import { flatenArrayTree, Treeable } from "./TsGenUtil";

export class TsGenClass implements Treeable {
    options: TsGenClassOptions;
    name: string;
    private declarations: TsGenDeclaration[];
    private methods: TsGenMethod[];
    private constructorDef: TsGenConstructor;
    private decorators: string[] = [];

    constructor(name: string, options?: TsGenClassOptions) {
        this.declarations = new Array<TsGenDeclaration>();
        this.methods = new Array<TsGenMethod>();
        this.name = name;
        this.options = options || {}; 
    }

    setConstructor(constructorDef: TsGenConstructor) {
        this.constructorDef = constructorDef;
    }

    addDeclaration(declaration: TsGenDeclaration) {
         // Check if not already defined
         const found = this.declarations.filter((c) => declaration.name === c.name).length;
         if (found === 0) {
             this.declarations.push(declaration);
         } else {
             console.log("Error: TsGenClass.addDeclaration ", declaration.name, " already defined." );
         }
    }

    addMethod(method: TsGenMethod) {
        // Check if not already defined
        const found = this.methods.filter((m) => method.name === m.name).length;
        if (found === 0) {
            this.methods.push(method);
        } else {
            console.log("Error: TsGenClass.addMethod ", method.name, " already defined." );
        }
   }

   addDecorator(decorator: string) {
       this.decorators.push(decorator);
   }

   toString(indent: number = 0): string {
        return flatenArrayTree(this.toArrayTree(), indent);
    }

    toArrayTree(): Array<any> {
        const header = (this.options.exportable? "export ": "") +
                       "class " + this.name + " { ";

        const bloc3 = this.declarations.map((dec) => dec.toArrayTree() );
        let bloc4 = [];
        if (this.constructorDef) {
            bloc4 = [ this.constructorDef.toArrayTree() ];
        } 
        const bloc5 = this.methods.map((m) => m.toArrayTree() );
        const blocn = "}";

        return [...this.decorators, header, ...bloc3, ...bloc4, ...bloc5, blocn];
    }
}