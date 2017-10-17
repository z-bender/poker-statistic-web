import {Component} from '@angular/core';
import {BankrollItem} from '../index';

@Component({
  moduleId: module.id,
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html'
})
export class AddItemComponent {
  bankrollItem: BankrollItem;
}
