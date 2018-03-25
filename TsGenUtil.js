"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printParameters(parameters) {
    const bloc1 = parameters.filter(p => !p.opts.optional).map(p => p.toString());
    const bloc2 = parameters.filter(p => p.opts.optional).map(p => p.toString());
    return [...bloc1, ...bloc2].join(", ");
}
exports.printParameters = printParameters;
function flatenArrayTree(array, level, indent) {
    level = level || 0;
    indent = indent || "   ";
    let str = "";
    array.forEach((e) => {
        if (Array.isArray(e)) {
            str += flatenArrayTree(e, level + 1, indent);
        }
        else {
            str += Array(level).join(indent) + e + "\n";
        }
    });
    return str;
}
exports.flatenArrayTree = flatenArrayTree;
//# sourceMappingURL=TsGenUtil.js.map