"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const TsGenUtil_1 = require("./TsGenUtil");
class TsGenSource {
    constructor(path, opts) {
        this.path = path;
        this.imports = new Array();
        this.classes = new Array();
        this.functions = new Array();
        this.opts = opts || {};
        this.opts.indent = this.opts.indent || "   ";
    }
    addImport(tsGenImport) {
        // Check if not already defined
        tsGenImport.importables.forEach((e) => {
            const found = this.imports.filter((imp) => imp.has(e)).length;
            if (found === 0) {
                // Now check if a new import is required or can be appended to a given one
                const lines = this.imports.filter((x) => x.fromSource === tsGenImport.fromSource);
                if (lines.length === 0) {
                    this.imports.push(tsGenImport);
                }
                else {
                    lines[0].addImportable(tsGenImport);
                }
            }
            else {
                console.log("Error: TsGenSource.addImport ", e, " already imported.");
            }
        });
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
    toString(level = 0) {
        return TsGenUtil_1.flatenArrayTree(this.toArrayTree(), level, this.opts.indent);
    }
    toArrayTree() {
        const bloc1 = this.imports.map((imp) => imp.toArrayTree());
        const bloc2 = this.functions.map((fun) => fun.toArrayTree());
        const bloc3 = this.classes.map((clazz) => clazz.toArrayTree());
        const blocs = [...bloc1, "", ...bloc2, ...bloc3];
        return blocs;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const src = this.toString();
            fs.writeFileSync(this.path, src);
        });
    }
}
exports.TsGenSource = TsGenSource;
//# sourceMappingURL=TsGenSource.js.map