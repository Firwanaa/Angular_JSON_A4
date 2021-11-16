import { Component, OnInit } from '@angular/core';
import { Firwanaa } from './type';
import { PersonaldataService } from './personaldata.service';
import { CovidService } from './covid.service';
import { CovidHomes } from './type';

// import covidSum from '../assets/data/covidsummary.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'firwanaaA4';
  myPData!: Firwanaa;
  covidHomeData!: CovidHomes[];


  constructor(private MyService: PersonaldataService, private myCovidService: CovidService) {}

  ngOnInit(): void {
    this.ldData();
    this.loadFiles();
  }
  ldData(): void {
    this.myPData = this.MyService.loaddata();
  }

  loadFiles(): any {
    return this.covidHomeData = this.myCovidService.loadFiles();
  }
}
