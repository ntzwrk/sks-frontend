import { Injectable } from '@angular/core';
import { Keyserver } from 'sks-lib';
import { RequestPromise } from 'request-promise-native';

import { environment } from '../../environments/environment';


@Injectable()
export class KeyService {

  private port: number|undefined = environment.usesHttps ? 443 : undefined;
  keyserver: Keyserver = new Keyserver(environment.hostName, this.port, environment.basePath);


  constructor() { }

  search(query: string) {
    const scheme = environment.usesHttps ? 'https' : 'http';
    const slashNeeded = this.keyserver.basePath.startsWith('/') || !this.keyserver.basePath;
    const basePath = slashNeeded ? this.keyserver.basePath : '/' + this.keyserver.basePath;
    const host = scheme + '://' + this.keyserver.hostName + ':' + this.keyserver.port + basePath;

    window.location.href = host + '/pks/lookup?op=index&fingerprint=on&search=' + encodeURIComponent(query);
  }

  submit(key: string): RequestPromise {
    return this.keyserver.upload(key);
  }

}
