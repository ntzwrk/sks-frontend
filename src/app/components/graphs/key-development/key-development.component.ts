import { Component, OnInit, Input } from '@angular/core';
import { KeyStats } from 'sks-lib';
import { Moment } from 'moment';
import { StockChart } from 'angular-highcharts';

import { StatsService } from '../../../services/stats.service';


// define own KeyStatsEntry which is writable (handy for adding keys up)
class KeyStatsEntry { dateTime: Moment; newKeys: number; updatedKeys: number; }

@Component({
  selector: 'app-graphs-key-development',
  templateUrl: './key-development.component.html',
  styleUrls: ['./key-development.component.scss']
})
export class KeyDevelopmentComponent implements OnInit {

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
    yAxis: { opposite: false, title: {text: 'Number of Keys' }, tickInterval: 1, labels: { format: '{value:,.0f}' } },
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
      { name: 'Number of Keys', id: 'keys', data: [] }
    ]
  };

  chart: StockChart;


  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.getKeyStats().then((keyStats) => {
      // reverse data (oldest first), trim off the last (potentially) incomplete entry then adding up
      const hourlyKeys = keyStats.hourlyKeys.reverse().slice(0, -1).map(
        (entry: KeyStatsEntry, index, array) => {
          if (index === 0) {
            entry.newKeys += keyStats.totalKeys;
            return entry;
          }
          entry.newKeys += array[index - 1].newKeys;
          return entry;
        }, []
      );

      // add "new keys" data set
      this.chartOptions.series[0].data = hourlyKeys.map(
        (entry) => [entry.dateTime.unix() * 1000, entry.newKeys]
      );

      // add "updated keys" data set
      this.chartOptions.series[0].data = hourlyKeys.map(
        (entry) => [entry.dateTime.unix() * 1000, entry.newKeys]
      );

      // finally create chart
      this.chart = new StockChart(this.chartOptions);
    });
  }

}
