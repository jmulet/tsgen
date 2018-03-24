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
const child_process_1 = require("child_process");
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
        const raw = blocs.join("\n");
        //Beautify the
        return raw;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const src = this.toString();
            console.log("Writing to ", src);
            fs.writeFileSync(this.path, src);
            child_process_1.exec('../node_modules/typescript-formatter/bin/tsfmt -r ' + this.path, (err, stdout, stderr) => {
                console.log("Prettyfing ts");
                if (err) {
                    // node couldn't execute the command
                    console.log(err);
                    return;
                }
                // the *entire* stdout and stderr (buffered)
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            });
        });
    }
}
exports.TsGenSource = TsGenSource;
//# sourceMappingURL=TsGenSource.js.map