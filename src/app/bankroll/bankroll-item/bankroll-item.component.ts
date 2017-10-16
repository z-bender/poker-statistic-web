import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-bankroll-item',
  templateUrl: 'bankroll-item.component.html'
})
export class BankrollItemComponent {
  id: number;
  dateTime: Date;
  @Input()
  money: number;
  points: number;
  // todo: where is type?
  type: any;
  comment: string;
}

