import { Injectable } from '@angular/core';
import { Firwanaa } from './type';
import { MYINFO } from 'src/assets/data/firwanaaData';

@Injectable({
  providedIn: 'root'
})
export class PersonaldataService {

  constructor() { }

  loaddata(): Firwanaa{
    return MYINFO;
  }
}
