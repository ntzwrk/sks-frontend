import { Component, OnInit, Input } from '@angular/core';
import { KeyStats } from 'sks-lib';
import { Moment } from 'moment';
import { StockChart } from 'angular-highcharts';

import { StatsService } from '../../../services/stats.service';


@Component({
  selector: 'app-graphs-key-fluctuation',
  templateUrl: './key-fluctuation.component.html',
  styleUrls: ['./key-fluctuation.component.scss']
})
export class KeyFluctuationComponent implements OnInit {

  chartOptions = {
    chart: { zoomType: 'x' },
    legend: { enabled: true },
    rangeSelector: {
      selected: 1,
      buttons: [
        { type: 'day', count: 1, text: '1d' },
        { type: 'week', count: 1, text: '1w' },
        { type: 'all', count: 1, text: 'All' }
      ]
    },
    xAxis: { title: { text: 'Date' }, type: 'datetime', ordinal: false, dateTimeLabelFormats: { month: '%e. %b', year: '%b' } },
    yAxis: { opposite: false, title: {text: 'Number of Keys' }, tickInterval: 1 },
    tooltip: {
      headerFormat: '<b>{point.x:%d.%m.%Y - %H:%M:%S}<\/b><br \/>',
      pointFormat: '{series.name}: {point.y}<br \/>'
    },
    plotOptions: {
      line: {
        marker: { enabled: false },
        turboThreshold: 0
      }
    },
    credits: { enabled: false },
    series: [
      { name: 'New Keys', id: 'newKeys', data: [] },
      { name: 'Updated Keys', id: 'updatedKeys', data: [] }
    ]
  };

  chart: StockChart;


  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.getKeyStats().then((keyStats) => {
      // reverse data (oldest first) and trim off the last (potentially) incomplete entry
      const hourlyKeys = keyStats.hourlyKeys.reverse().slice(0, -1);

      // add "new keys" data set
      this.chartOptions.series[0].data = hourlyKeys.map(
        (entry) => [entry.dateTime.unix() * 1000, entry.newKeys]
      );

      // add "updated keys" data set
      this.chartOptions.series[1].data = hourlyKeys.map(
        (entry) => [entry.dateTime.unix() * 1000, entry.updatedKeys]
      );

      // finally create chart
      this.chart = new StockChart(this.chartOptions);
    });
  }

}
