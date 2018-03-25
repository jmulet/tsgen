"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TsGenUtil_1 = require("./TsGenUtil");
class TsGenConstructor {
    constructor() {
        this.parameters = new Array();
        this.body = [];
    }
    addParameter(param) {
        // Check if not already defined
        const found = this.parameters.filter((p) => param.name === p.name).length;
        if (found === 0) {
            this.parameters.push(param);
        }
        else {
            console.log("Error: TsGenConstructor.addParameter ", param.name, " already defined.");
        }
    }
    addToBody(sentence) {
        this.body.push(sentence);
    }
    toString(indent = 0) {
        return TsGenUtil_1.flatenArrayTree(this.toArrayTree(), indent);
    }
    toArrayTree() {
        const header = "constructor(" + TsGenUtil_1.printParameters(this.parameters) + ") {";
        return [header,
            this.body.map(s => s.toArrayTree ? s.toArrayTree() : s),
            "}"];
    }
}
exports.TsGenConstructor = TsGenConstructor;
//# sourceMappingURL=TsGenConstructor.js.map