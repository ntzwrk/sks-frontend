import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StatsService } from './services/stats.service';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SearchComponent } from './components/search/search.component';
import { SubmitComponent } from './components/submit/submit.component';

import { StatsModule } from './components/stats/stats.module';
import { GraphsModule } from './components/graphs/graphs.module';
import { KeyService } from './services/key.service';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    SearchComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    StatsModule,
    GraphsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ StatsService, KeyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
