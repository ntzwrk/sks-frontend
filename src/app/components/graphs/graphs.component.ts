import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  hostName: string = environment.hostName;
  humanizedStatsTime: string;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.getHumanizedStatsTime()
      .then((humanizedStatsTime) => this.humanizedStatsTime = humanizedStatsTime);
  }

}
