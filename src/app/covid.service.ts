import { Injectable } from '@angular/core';
import { CovidHomes } from './type';

import covidSum from '../assets/data/covidsummary.json';


@Injectable({
  providedIn: 'root'
})
export class CovidService {
  covidHomeData: CovidHomes[] = covidSum;
  constructor() { }

  loadFiles(): CovidHomes[] {
    return this.covidHomeData;
  }
}
