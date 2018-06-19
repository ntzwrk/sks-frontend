import { Component, OnInit } from '@angular/core';
import { Stats } from 'sks-lib';

import { environment } from '../../../environments/environment';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  hostName: string = environment.hostName;
  stats: Stats;
  humanizedStatsTime: string;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.getStats().then(
      (stats) => this.stats = stats
    );

    this.statsService.getHumanizedStatsTime().then(
      (humanizedStatsTime) => this.humanizedStatsTime = humanizedStatsTime
    );
  }

}
