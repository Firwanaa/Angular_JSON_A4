import { Component, OnInit, Input } from '@angular/core';
import { Firwanaa } from '../type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() footerInfo!: Firwanaa;
  constructor() {}

  ngOnInit(): void {}
}
