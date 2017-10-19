import {Component} from '@angular/core';

@Component({
  selector: 'app-item-enum',
  template: `
    <select>
      <option value="GAME">Игра</option>
      <option value="DEPOSIT">Депозит</option>
    </select>
  `
})
export class ItemEnumComponent {
}
