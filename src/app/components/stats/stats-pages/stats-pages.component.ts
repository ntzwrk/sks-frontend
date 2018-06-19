import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-stats-stats-pages',
  templateUrl: './stats-pages.component.html',
  styleUrls: ['./stats-pages.component.scss']
})
export class StatsPagesComponent implements OnInit {

  @Input() hostName: string;
  scheme = environment.usesHttps ? 'https' : 'http';

  constructor() { }

  ngOnInit() {
  }

}
