import { TsGenSource } from "../src/TsGenSource";
import { TsGenImport, AngularImports } from "../src/TsGenImport";
import { TsGenClass } from "../src/TsGenClass";
import { TsGenConstructor } from "../src/TsGenConstructor";
import { TsGenParam } from "../src/TsGenParam";
import { TsGenMethod } from "../src/TsGenMethod";
import * as path from 'path';
import { TsGenDeclaration } from "../src/TsGenDeclaration";

const file = path.resolve("./file.ts");
const source = new TsGenSource(file, {indent: "  "})

source.addImport(new TsGenImport("* as fs", "fs"))
source.addImport(TsGenImport.fromAngular(AngularImports.Injectable));
source.addImport(TsGenImport.fromAngular(AngularImports.HttpParams));
source.addImport(TsGenImport.fromAngular(AngularImports.HttpClient));

const clazz = new TsGenClass("MyService", {exportable: true})
source.addClass(clazz)
clazz.addDecorator("@Injectable()")
clazz.addDeclaration(new TsGenDeclaration("a", ""))

const construct = new TsGenConstructor();
construct.addParameter(new TsGenParam("param", "string", {optional: true, initial: "''"}))
construct.addToBody("this.a = 11;")
clazz.setConstructor(construct);

const method = new TsGenMethod("add", "public", "number");
method.addParameter(new TsGenParam("x", "number"));
method.addParameter(new TsGenParam("z", "number"));
method.addParameter(new TsGenParam("y", "number"));
method.addToBody("return x+y;");
clazz.addMethod(method);

console.log(source.toArrayTree())
console.log(source.toString())
source.save();