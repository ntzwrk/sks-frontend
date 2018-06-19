import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './stats.component';
import { GeneralComponent } from './general/general.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { StatsPagesComponent } from './stats-pages/stats-pages.component';
import { GossipPeersComponent } from './gossip-peers/gossip-peers.component';
import { MailsyncPeersComponent } from './mailsync-peers/mailsync-peers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StatsComponent,
    GeneralComponent,
    AdvancedComponent,
    StatsPagesComponent,
    GossipPeersComponent,
    MailsyncPeersComponent
  ],
  exports: [ StatsComponent ]
})
export class StatsModule { }
