import {Component, OnInit} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {WifiDataService} from "../services/wifi-data.service";
import {Wifi} from "../entities/wifi";
@Component({
  moduleId: module.id,
  selector: 'wifi-search',
  templateUrl: '../partial_html/search.component.html'
})

export class SearchComponent implements OnInit {
  wifis: Observable<Wifi[]>
  private searchTerms = new Subject<string>();

  constructor(private wifiService: WifiDataService) {

  }

  ngOnInit(): void {
    this.wifis = this.searchTerms
      .debounceTime(300) //wait 300 ms after each keystroke before considering the term
      .distinctUntilChanged() // ignore if next search term is same as previous
      .switchMap(term => term // switch to new observable each time the term changes
        ? this.wifiService.search(term) // or the observable of empty heroes if there was no search term
        : Observable.of<Wifi[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Wifi[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
