import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
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
    const body = JSON.stringify(item);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    this.http.post(url, body, options)
      .subscribe(
        result => console.log(result.json()),
        error => console.log(error.statusText)
      );
  }

}
