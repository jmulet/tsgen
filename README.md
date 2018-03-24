# TsGen

### About:

Generate typescript code programatically.
 
### Installation:
npm install --save tsgen

### Usage:

Start creating a source generator object:

```javascript
import * as path from 'path'
import { TsGenSource } from 'tsgen/TsGenSource'

const file = path.resolve("./file.ts")
const source = new TsGenSource(file)
```

Then programatically add imports, functions, classes, etc. to this source object:

```javascript
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
```

Finally, save the generated code to a file
```javascript
source.save()
```
or simply generate its string representation `source.toString()`.

This example produces the following output

```javascript
import * as fs from 'fs'
import { Injectable } from '@angular/core'

@Injectable()
export class MyService {
    constructor(private param: number) {
    }
    add(x: number, y: number) {
        return x + y;
    }

}
```

which obviously is a simple example.

## License

MIT

## Credits

Josep Mulet (pep.mulet@gmail.com)