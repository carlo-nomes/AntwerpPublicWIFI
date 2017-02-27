import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import  'rxjs/add/operator/map';

import {Wifi} from "../entities/wifi";

@Injectable()
export class WifiDataService {
  private localUrl = './../fakeAPI/wifiopenbaar.json';
  private realUrl = 'http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json';
  private url = this.realUrl;

  constructor(private http: Http) {
  }

  getWifis(): Observable<Wifi[]> {
    return this.http.get(this.url)
      .map(r => r.json().data.map(w => this.mapToWifi(w)) as Wifi[])
      .catch(this.handleError);
  }

  search(term: string): Observable<Wifi[]> {
    return this.getWifis().map(r =>
      r.filter(ws => ws.location.city.concat(ws.location.code).toLowerCase().match(term.toLocaleLowerCase()))
    );
  }

  handleError(error: any): Promise<any> {
    console.error('An Error occurred', error);
    return Promise.reject(error.message || error);
  }

  mapToWifi(org: any): Wifi {
    return {
      id: org.id,
      coordinates: {
        lat: org.point_lat,
        lng: org.point_lng
      },
      location: {
        name: org.locatie,
        street: org.straat,
        nr: org.huisnr,
        code: org.postcode,
        city: org.gemeente
      }
    } as Wifi
  }
}
