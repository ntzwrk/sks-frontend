import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { SubmitComponent } from './components/submit/submit.component';
import { StatsComponent } from './components/stats/stats.component';
import { GraphsComponent } from './components/graphs/graphs.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'submit', component: SubmitComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'graphs', component: GraphsComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
