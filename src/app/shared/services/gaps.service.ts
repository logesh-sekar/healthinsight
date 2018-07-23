import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gaps } from '../../shared/services/gaps.data';

@Injectable()
export class GapsService {

    constructor(private http: HttpClient) {}

    getGaps() {
        return this.http.get('/assets/json/gaps.json');
    }
}
