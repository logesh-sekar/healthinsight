import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Gaps, CloseGaps } from './gaps.data';
import { map, filter, tap, flatMap } from 'rxjs/operators';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class GapsService {

    constructor(private http: HttpClient) {}

    getGaps(memberID) {
        return this.http.get(`http://10.6.120.78:8082/curis/closeGaps/${memberID}`);
    }
    getMemberGaps() {
        return this.http.get('/assets/json/membercaregaps.json');
    }
    getGapsInfo(gapId) {
        return this.http.get(`http://10.6.120.78:8082/curis/closeGaps/${gapId}`).pipe(
            map((items: any) => {
                return items.careGaps.filter(item => parseInt(gapId, 10)  === item.id );
              }, (error => error),
              )
        );
    }
    getMemberList(query) {
        return this.http.get(`http://10.6.122.180:8080/curis/qms/members/${query}`);
    }
}
