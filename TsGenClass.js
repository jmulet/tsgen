"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TsGenUtil_1 = require("./TsGenUtil");
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
    toString(indent = 0) {
        return TsGenUtil_1.flatenArrayTree(this.toArrayTree(), indent);
    }
    toArrayTree() {
        const header = (this.options.exportable ? "export " : "") +
            "class " + this.name + " { ";
        const bloc3 = this.declarations.map((dec) => dec.toArrayTree());
        let bloc4 = [];
        if (this.constructorDef) {
            bloc4 = [this.constructorDef.toArrayTree()];
        }
        const bloc5 = this.methods.map((m) => m.toArrayTree());
        const blocn = "}";
        return [...this.decorators, header, ...bloc3, ...bloc4, ...bloc5, blocn];
    }
}
exports.TsGenClass = TsGenClass;
//# sourceMappingURL=TsGenClass.js.map