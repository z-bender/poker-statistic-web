import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent, BankrollModule, PlayersModule} from './index';
import {routs} from './routs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routs),
    PlayersModule,
    BankrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
