import {NgModule} from '@angular/core';
import {AddItemComponent, BankrollComponent, BankrollItem} from './index';

@NgModule({
  declarations: [BankrollComponent, AddItemComponent],
  providers: [BankrollItem]
})
export class BankrollModule { }
