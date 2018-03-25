"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TsGenDeclaration {
    constructor(name, type, initial) {
        this.name = name;
        this.type = type;
        this.initial = initial;
    }
    toString(indent = 0) {
        return Array(indent + 1).join("\t") + this.toArrayTree()[0];
    }
    toArrayTree() {
        return [this.name + (this.type ? (": " + this.type) : (this.initial ? "" : ": any")) + (this.initial ? (" = " + this.initial) : "") + ";"];
    }
}
exports.TsGenDeclaration = TsGenDeclaration;
//# sourceMappingURL=TsGenDeclaration.js.map