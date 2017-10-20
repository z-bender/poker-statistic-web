import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BankrollItem} from '../bankroll/bankroll-item';
import {AbstractApiService} from './AbstractApiService';

@Injectable()
export class BankrollApiService extends AbstractApiService {

  private bankrollApiUrl = this.apiUrl + '/bankroll';

  constructor(private http: Http) {
    super();
  }

  add(item: BankrollItem) {
    const url: string = this.bankrollApiUrl + '/add';
    this.http.post(url, item);
  }

}
