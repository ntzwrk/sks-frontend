import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { KeyService } from '../../services/key.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  hostName = environment.hostName;
  scheme = environment.usesHttps ? 'https' : 'http';
  onionServiceUrl = environment.onionServiceUrl;
  subDomain: string;

  query = '';

  constructor(private keyService: KeyService) { }

  ngOnInit() {
    // split hostname into parts
    const parts = this.hostName.split('.');

    if (environment.hostHighlighting && parts.length > 2) {
      // strip two top-most parts and push them into hostParts
      const hostParts = [];
      hostParts.push(parts.pop());
      hostParts.push(parts.pop());
      hostParts.reverse();

      // join parts back together
      this.hostName = hostParts.join('.');
      this.subDomain = parts.join('.') + '.';
    }
  }

  search() {
    if (!this.query.trim()) {
      return;
    }

    this.keyService.search(this.query);
  }
}
