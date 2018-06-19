import { Component, OnInit, Input } from '@angular/core';
import { Stats } from 'sks-lib';

@Component({
  selector: 'app-stats-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

  @Input() stats: Stats;

  constructor() { }

  ngOnInit() {
  }

}
