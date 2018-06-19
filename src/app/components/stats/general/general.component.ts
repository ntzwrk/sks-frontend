import { Component, OnInit, Input } from '@angular/core';
import { Stats } from 'sks-lib';

@Component({
  selector: 'app-stats-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  @Input() stats: Stats;

  constructor() { }

  ngOnInit() {
  }

}
