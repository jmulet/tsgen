"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TsGenMethod_1 = require("./TsGenMethod");
const TsGenUtil_1 = require("./TsGenUtil");
class TsGenFunc extends TsGenMethod_1.TsGenMethod {
    constructor(name, visibility, exportable) {
        super(name, visibility);
        this.exportable = exportable;
    }
    toString(indent = 0) {
        return TsGenUtil_1.flatenArrayTree(this.toArrayTree(), indent);
    }
    toArrayTree() {
        const header = (this.exportable ? "export " : "")
            + (this.visibility ? (this.visibility + " ") : "")
            + this.name + "(" + TsGenUtil_1.printParameters(this.parameters) + ")"
            + (this.returns ? (": " + this.returns) : "")
            + " {";
        return [...this.decorators, header,
            this.body.map(s => s.toArrayTree()),
            "}"];
    }
}
exports.TsGenFunc = TsGenFunc;
//# sourceMappingURL=TsGenFunc.js.map