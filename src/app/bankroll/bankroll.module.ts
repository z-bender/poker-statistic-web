import {NgModule} from '@angular/core';
import {AddItemComponent, BankrollComponent, BankrollItem} from './index';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {BankrollApiService} from '../_services/BankrollApiService';
import {AbstractApiService} from '../_services/AbstractApiService';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [BankrollComponent, AddItemComponent],
  providers: [BankrollItem, AddItemComponent, BankrollApiService, AbstractApiService],
  imports: [FormsModule, MatDatepickerModule, HttpModule, ReactiveFormsModule, CommonModule]
})
export class BankrollModule {

  constructor() {
    // for exclude change time for timezone
    Date.prototype.toJSON = function () {
      const utcIgnoreTimeZone = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes()));
      return utcIgnoreTimeZone.toISOString();
    };
  }

}
