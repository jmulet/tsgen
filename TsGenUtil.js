"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printParameters(parameters) {
    const bloc1 = parameters.filter(p => !p.optional).map(p => p.toString());
    const bloc2 = parameters.filter(p => p.optional).map(p => p.toString());
    return [...bloc1, ...bloc2].join(", ");
}
exports.printParameters = printParameters;
//# sourceMappingURL=TsGenUtil.js.map