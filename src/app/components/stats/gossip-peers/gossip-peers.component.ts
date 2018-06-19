import { Component, OnInit, Input } from '@angular/core';
import { Stats } from 'sks-lib';

@Component({
  selector: 'app-stats-gossip-peers',
  templateUrl: './gossip-peers.component.html',
  styleUrls: ['./gossip-peers.component.scss']
})
export class GossipPeersComponent implements OnInit {

  @Input() stats: Stats;

  constructor() { }

  ngOnInit() {
  }

}
