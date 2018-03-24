"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TsGenImport {
    constructor(importable, fromSource) {
        this.importable = importable;
        this.fromSource = fromSource;
    }
    toString() {
        if (this.importable.indexOf("*") >= 0) {
            return "import " + this.importable + " from '" + this.fromSource + "'";
        }
        else {
            return "import { " + this.importable + " } from '" + this.fromSource + "'";
        }
    }
}
exports.TsGenImport = TsGenImport;
//# sourceMappingURL=TsGenImport.js.map