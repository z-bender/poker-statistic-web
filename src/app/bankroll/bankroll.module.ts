import {NgModule} from '@angular/core';
import {AddItemComponent, BankrollComponent, BankrollItem} from './index';
import {FormsModule} from '@angular/forms';
import {ItemEnumComponent} from './item-enum.component';
import {MatDatepickerModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {BankrollApiService} from '../_services/BankrollApiService';
import {AbstractApiService} from '../_services/AbstractApiService';

@NgModule({
  declarations: [BankrollComponent, AddItemComponent, ItemEnumComponent],
  providers: [BankrollItem, AddItemComponent, BankrollApiService, AbstractApiService],
  imports: [FormsModule, MatDatepickerModule, HttpModule]
})
export class BankrollModule { }
