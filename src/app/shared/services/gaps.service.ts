import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Gaps } from './gaps.data';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class GapsService {

    constructor(private http: HttpClient) {}

    getGaps() {
        return this.http.get('/assets/json/gaps.json');
    }
    getGapsInfo(gapId) {
        return this.http.get('/assets/json/gaps.json').pipe(
            map(items => {
                return items['data'].filter(item => parseInt(gapId, 10)  === item.id );
              }, (error => error),
              ),
            map( data => data[0])
        );
    }
}
