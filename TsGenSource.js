"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class TsGenSource {
    constructor(path) {
        this.path = path;
        this.imports = new Array();
        this.classes = new Array();
        this.functions = new Array();
    }
    addImport(tsGenImport) {
        // Check if not already defined
        const found = this.imports.filter((imp) => tsGenImport.importable === imp.importable).length;
        if (found === 0) {
            this.imports.push(tsGenImport);
        }
        else {
            console.log("Error: TsGenSource.addImport ", tsGenImport.importable, " already imported.");
        }
    }
    addClass(tsGenClass) {
        // Check if not already defined
        const found = this.classes.filter((c) => tsGenClass.name === c.name).length;
        if (found === 0) {
            this.classes.push(tsGenClass);
        }
        else {
            console.log("Error: TsGenSource.addClass ", tsGenClass.name, " already defined.");
        }
    }
    addFunction(tsGenFunc) {
        // Check if not already defined
        const found = this.functions.filter((c) => tsGenFunc.name === c.name).length;
        if (found === 0) {
            this.functions.push(tsGenFunc);
        }
        else {
            console.log("Error: TsGenSource.addFunction ", tsGenFunc.name, " already defined.");
        }
    }
    toString() {
        const bloc1 = this.imports.map((imp) => imp.toString());
        const bloc2 = this.functions.map((c) => c.toString() + "\n");
        const bloc3 = this.classes.map((c) => c.toString() + "\n");
        const blocs = [...bloc1, ...[""], ...bloc2, ...bloc3];
        return blocs.join("\n");
    }
    save() {
        fs.writeFileSync(this.path, this.toString());
    }
}
exports.TsGenSource = TsGenSource;
//# sourceMappingURL=TsGenSource.js.map