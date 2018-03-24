"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TsGenDeclaration {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    toString() {
        return this.name + ": " + (this.type ? this.type : "any") + ";";
    }
}
exports.TsGenDeclaration = TsGenDeclaration;
//# sourceMappingURL=TsGenDeclaration.js.map