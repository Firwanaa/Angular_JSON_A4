import { Component, OnInit, Input } from '@angular/core';
import { CovidHomes } from '../type';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
@Input() covidInfo!: CovidHomes[];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.covidInfo[0]);
  }

}
