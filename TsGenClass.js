"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TsGenClass {
    constructor(name, options) {
        this.decorators = [];
        this.declarations = new Array();
        this.methods = new Array();
        this.name = name;
        this.options = options || {};
    }
    setConstructor(constructorDef) {
        this.constructorDef = constructorDef;
    }
    addDeclaration(declaration) {
        // Check if not already defined
        const found = this.declarations.filter((c) => declaration.name === c.name).length;
        if (found === 0) {
            this.declarations.push(declaration);
        }
        else {
            console.log("Error: TsGenClass.addDeclaration ", declaration.name, " already defined.");
        }
    }
    addMethod(method) {
        // Check if not already defined
        const found = this.methods.filter((m) => method.name === m.name).length;
        if (found === 0) {
            this.methods.push(method);
        }
        else {
            console.log("Error: TsGenClass.addMethod ", method.name, " already defined.");
        }
    }
    addDecorator(decorator) {
        this.decorators.push(decorator);
    }
    toString() {
        const bloc2 = [
            (this.options.exportable ? "export " : "") +
                "class " + this.name + " { "
        ];
        const bloc3 = this.declarations.map((dec) => dec.toString());
        let bloc4 = [];
        if (this.constructorDef) {
            bloc4 = [this.constructorDef.toString()];
        }
        const bloc5 = this.methods.map((m) => m.toString() + "\n");
        const blocn = ["}"];
        return [...this.decorators, ...bloc2, ...bloc3, ...bloc4, ...bloc5, ...blocn].join("\n");
    }
}
exports.TsGenClass = TsGenClass;
//# sourceMappingURL=TsGenClass.js.map