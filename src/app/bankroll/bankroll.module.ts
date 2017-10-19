import {NgModule} from '@angular/core';
import {AddItemComponent, BankrollComponent, BankrollItem} from './index';
import {FormsModule} from '@angular/forms';
import {ItemEnumComponent} from './item-enum.component';
import {MatDatepickerModule} from '@angular/material';

@NgModule({
  declarations: [BankrollComponent, AddItemComponent, ItemEnumComponent],
  providers: [BankrollItem],
  imports: [FormsModule, MatDatepickerModule],
})
export class BankrollModule { }
