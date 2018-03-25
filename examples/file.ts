import * as fs from 'fs';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class MyService { 
  a: any;
  constructor(param: string = '') {
    this.a = 11;
  }
  public add(x: number, z: number, y: number): number {
    return x+y;
  }
}
