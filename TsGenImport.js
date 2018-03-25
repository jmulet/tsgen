"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AngularImports;
(function (AngularImports) {
    AngularImports[AngularImports["HttpClient"] = 0] = "HttpClient";
    AngularImports[AngularImports["HttpParams"] = 1] = "HttpParams";
    AngularImports[AngularImports["Injectable"] = 2] = "Injectable";
    AngularImports[AngularImports["FormGroup"] = 3] = "FormGroup";
})(AngularImports = exports.AngularImports || (exports.AngularImports = {}));
const AngularImportables = [
    { importable: 'HttpClient', fromSource: '@angular/common/http' },
    { importable: 'HttpParams', fromSource: '@angular/common/http' },
    { importable: 'Injectable', fromSource: '@angular/core' },
    { importable: 'FormGroup', fromSource: '@angular/forms' },
];
class TsGenImport {
    constructor(importable, fromSource) {
        this.importables = [];
        this.importables.push(importable);
        this.fromSource = fromSource;
    }
    toString(indent = 0) {
        return Array(indent + 1).join("\t") + this.toArrayTree()[0];
    }
    addImportable(imp) {
        if (imp.fromSource === this.fromSource) {
            imp.importables.forEach((imp) => this.importables.push(imp));
        }
    }
    has(importable) {
        return this.importables.indexOf(importable) >= 0;
    }
    toArrayTree() {
        if (this.importables.filter((imp) => imp.indexOf("*") >= 0).length > 0) {
            return ["import " + this.importables.join(", ") + " from '" + this.fromSource + "';"];
        }
        else {
            return ["import { " + this.importables.join(", ") + " } from '" + this.fromSource + "';"];
        }
    }
    static fromAngular(id) {
        const found = AngularImportables[id];
        if (found) {
            return new TsGenImport(found.importable, found.fromSource);
        }
    }
}
exports.TsGenImport = TsGenImport;
//# sourceMappingURL=TsGenImport.js.map