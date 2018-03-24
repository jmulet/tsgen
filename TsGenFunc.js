"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TsGenMethod_1 = require("./TsGenMethod");
class TsGenFunc extends TsGenMethod_1.TsGenMethod {
    constructor(name, visibility, exportable) {
        super(name, visibility);
        this.exportable = exportable;
    }
    toString() {
        return (this.exportable ? "export " : "") + super.toString();
    }
}
exports.TsGenFunc = TsGenFunc;
//# sourceMappingURL=TsGenFunc.js.map