"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TsGenParam {
    constructor(name, type, optional, visibility) {
        this.name = name;
        this.type = type || "any";
        this.optional = optional;
        this.visibility = visibility || "";
    }
    toString() {
        return (this.visibility ? (this.visibility + " ") : "") + this.name + (this.optional ? "?" : "") + ": " + this.type;
    }
}
exports.TsGenParam = TsGenParam;
//# sourceMappingURL=TsGenParam.js.map