import {NgModule} from '@angular/core';
import {AddItemComponent, BankrollComponent, BankrollItem} from './index';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [BankrollComponent, AddItemComponent],
  providers: [BankrollItem],
  imports: [FormsModule]
})
export class BankrollModule { }
