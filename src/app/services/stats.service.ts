import { Injectable } from '@angular/core';
import { Keyserver, Stats, KeyStats } from 'sks-lib';
import * as moment from 'moment';

import { environment } from '../../environments/environment';

@Injectable()
export class StatsService {

  private port: number|undefined = environment.usesHttps ? 443 : undefined;
  keyserver: Keyserver = new Keyserver(environment.hostName, this.port, environment.basePath);


  constructor() { }

  getStats(): Promise<Stats> {
    return this.keyserver.getStats();
  }

  getKeyStats(): Promise<KeyStats> {
    return this.keyserver.getKeyStats();
  }

  getHumanizedStatsTime(): Promise<string> {
    return this.getStats().then(
      (stats) => moment.duration(stats.statsTime.diff(moment())).humanize()
    );
  }

}
