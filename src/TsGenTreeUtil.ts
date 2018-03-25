import { Treeable } from "./TsGenUtil";

class TreeUtil implements Treeable {
   
    value: any;
    private constructor(value: any) {
        this.value = value
    }

    static fromString(str: string) {
        return new TreeUtil(str);
    }

    toArrayTree(): Array<string> {
        return [this.value];    
    }
}