import { Component, OnInit, Input } from '@angular/core';
import { Stats } from 'sks-lib';

@Component({
  selector: 'app-stats-mailsync-peers',
  templateUrl: './mailsync-peers.component.html',
  styleUrls: ['./mailsync-peers.component.scss']
})
export class MailsyncPeersComponent implements OnInit {

  @Input() stats: Stats;

  constructor() { }

  ngOnInit() {
  }

}
