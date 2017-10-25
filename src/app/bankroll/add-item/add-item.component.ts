import {Component, OnInit} from '@angular/core';
import {BankrollItem} from '../bankroll-item';
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

  constructor(private bankrollService: BankrollApiService) {
  }

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      date: new FormControl('', Validators.required),
      money: new FormControl('', Validators.required),
      points: new FormControl('', Validators.required),
      comment: new FormControl(''),
    });
  }

  add(): void {
    console.log(this.bankrollItem);
    this.bankrollService.add(this.bankrollItem);
  }
}
