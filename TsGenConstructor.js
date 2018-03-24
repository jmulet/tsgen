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
    toString() {
        const bloc1 = ["constructor(" + TsGenUtil_1.printParameters(this.parameters) + ") {"
        ];
        return [...bloc1, ...this.body.map(s => s.toString() || s), ...["}"]].join("\n");
    }
}
exports.TsGenConstructor = TsGenConstructor;
//# sourceMappingURL=TsGenConstructor.js.map