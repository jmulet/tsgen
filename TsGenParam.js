"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TsGenParam {
    constructor(name, type, opts) {
        this.name = name;
        this.type = type || "any";
        this.opts = opts || {};
        this.opts.visibility = this.opts.visibility || "";
        if (this.opts.initial) {
            this.opts.optional = true;
        }
    }
    toString(indent = 0) {
        return Array(indent + 1).join("\t") + this.toArrayTree()[0];
    }
    toArrayTree() {
        const visibility = this.opts.visibility ? (this.opts.visibility + " ") : "";
        let questionMark = "";
        if (!this.opts.initial) {
            questionMark = this.opts.optional ? "?" : "";
        }
        let initial = "";
        if (this.opts.initial) {
            initial = " = " + this.opts.initial;
        }
        return [
            visibility + this.name + questionMark + ": " + this.type + initial
        ];
    }
}
exports.TsGenParam = TsGenParam;
//# sourceMappingURL=TsGenParam.js.map