import { Component, OnInit, Input } from '@angular/core';
import { Firwanaa } from '../type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() headerInfo!: Firwanaa;


  constructor() { }

  ngOnInit(): void {
  }

}
