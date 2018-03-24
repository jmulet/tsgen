import { TsGenSource } from "../src/TsGenSource";
import { TsGenImport } from "../src/TsGenImport";
import { TsGenClass } from "../src/TsGenClass";
import { TsGenConstructor } from "../src/TsGenConstructor";
import { TsGenParam } from "../src/TsGenParam";
import { TsGenMethod } from "../src/TsGenMethod";
import * as path from 'path';

const file = path.resolve("./file.ts");
const source = new TsGenSource(file)

source.addImport(new TsGenImport("* as fs", "fs"))
source.addImport(new TsGenImport("Injectable", "@angular/core"))

const clazz = new TsGenClass("MyService", {exportable: true})
source.addClass(clazz)
clazz.addDecorator("@Injectable()")

const construct = new TsGenConstructor();
construct.addParameter(new TsGenParam("param", "number", false, "private"))
clazz.setConstructor(construct);

const method = new TsGenMethod("add");
method.addParameter(new TsGenParam("x", "number"));
method.addParameter(new TsGenParam("y", "number"));
method.addToBody("return x+y;");
clazz.addMethod(method);

console.log(source.toString())
source.save();