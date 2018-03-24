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
