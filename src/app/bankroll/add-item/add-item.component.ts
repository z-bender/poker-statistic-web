import {Component} from '@angular/core';
import {BankrollItem} from '../bankroll-item';
import {BankrollApiService} from '../../_services/BankrollApiService';

@Component({
  moduleId: module.id,
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html'
})
export class AddItemComponent {
  bankrollItem: BankrollItem = new BankrollItem;

  constructor(private bankrollService: BankrollApiService) {
  }

  add(): void {
    console.log(this.bankrollItem);
    this.bankrollService.add(this.bankrollItem);
  }
}
