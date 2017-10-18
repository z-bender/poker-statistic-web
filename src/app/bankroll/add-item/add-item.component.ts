import {Component} from '@angular/core';
import {BankrollItem} from '../bankroll-item';

@Component({
  moduleId: module.id,
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html'
})
export class AddItemComponent {
  bankrollItem: BankrollItem = new BankrollItem;

  add(): void {
    console.log(this.bankrollItem);
  }
}
