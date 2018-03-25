import { TsGenMethod } from '../src/TsGenMethod';
import { TsGenParam } from '../src/TsGenParam';

const method = new TsGenMethod("add", "public", "number");
method.addDecorator("@Api()")
method.addDecorator("@Validate([0, 1])")
method.addParameter(new TsGenParam("x", "number"));
method.addParameter(new TsGenParam("y", "number"));
method.addToBody("return x+y;");

console.log(method.toArrayTree());
console.log(method.toString());