"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeUtil {
    constructor(value) {
        this.value = value;
    }
    static fromString(str) {
        return new TreeUtil(str);
    }
    toArrayTree() {
        return [this.value];
    }
}
//# sourceMappingURL=TsGenTreeUtil.js.map