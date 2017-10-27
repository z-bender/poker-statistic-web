import {Component, OnInit} from '@angular/core';
import {BankrollItem, ItemType, ItemTypeTranslator} from '../bankroll-item';
import {BankrollApiService} from '../../_services/BankrollApiService';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html',
  styleUrls: ['../../main.css']
})
export class AddItemComponent implements OnInit {

  bankrollItem: BankrollItem = new BankrollItem;
  addItemForm: FormGroup;
  itemTypes;

  constructor(private bankrollService: BankrollApiService) {
    this.itemTypes = Object.keys(ItemType);
  }

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      date: new FormControl('', Validators.required),
      money: new FormControl('', Validators.required),
      points: new FormControl('', Validators.required),
      itemType: new FormControl('', Validators.required),
      comment: new FormControl(''),
    });
    this.bankrollItem.type = ItemType.GAME;
  }

  add(): void {
    console.log(this.bankrollItem);
    this.bankrollService.add(this.bankrollItem);
  }

  getTypeDescription(itemTypeValue: string) {
    return ItemTypeTranslator[itemTypeValue];
  }

}
