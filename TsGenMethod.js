"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TsGenUtil_1 = require("./TsGenUtil");
class TsGenMethod {
    constructor(name, visibility, returns) {
        this.body = [];
        this.decorators = [];
        this.parameters = new Array();
        this.name = name;
        this.visibility = visibility || "";
        this.returns = returns || "";
    }
    addParameter(param) {
        // Check if not already defined
        const found = this.parameters.filter((p) => param.name === p.name).length;
        if (found === 0) {
            this.parameters.push(param);
        }
        else {
            console.log("Error: TsGenMethod.addParameter ", param.name, " already defined.");
        }
    }
    addToBody(sentence) {
        this.body.push(sentence);
    }
    addDecorator(decorator) {
        this.decorators.push(decorator);
    }
    toString(indent = 0) {
        return TsGenUtil_1.flatenArrayTree(this.toArrayTree(), indent);
    }
    toArrayTree() {
        const header = (this.visibility ? (this.visibility + " ") : "")
            + this.name + "(" + TsGenUtil_1.printParameters(this.parameters) + ")"
            + (this.returns ? (": " + this.returns) : "")
            + " {";
        const body = this.body.map(s => s.toArrayTree ? s.toArrayTree() : s);
        return [...this.decorators, header, body, "}"];
    }
}
exports.TsGenMethod = TsGenMethod;
//# sourceMappingURL=TsGenMethod.js.map