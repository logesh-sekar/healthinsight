import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class GapsService {

    constructor(private http: HttpClient) {}

    getGaps(memberID) {
        return this.http.get(`http://healthinsight:8082/curis/closeGaps/${memberID}`);
    }
    getMemberGaps() {
        return this.http.get('http://healthinsight:8082/curis/memberGapList/findAllMembers');
    }
    getGapsInfo(gapId) {
        return this.http.get(`http://healthinsight:8082/curis/closeGaps/${gapId}`).pipe(
            map((items: any) => {
                return items.careGaps.filter(item => parseInt(gapId, 10)  === item.id );
              }, (error => error),
              )
        );
    }
    getMemberList(query) {
        return this.http.get(`http://healthinsight:8082/curis/qms/members/${query}`);
    }
    getPrograms() {
        return this.http.get(`http://healthinsight:8082/curis/qms/qmshome_dropdown_list/QMS_MEASURE/PROGRAM_NAME`);
    }
    getClinicalConditions() {
        return this.http.get(`http://healthinsight:8082/curis/qms/qmshome_dropdown_list/QMS_MEASURE/CLINICAL_CONDITIONS`);
    }
    getMeasureDomain() {
        return this.http.get(`http://healthinsight:8082/curis/qms/dropdown_namevalue_list/QMS_MEASURE_DOMAIN/MEASURE_DOMAIN_ID/MEASURE_DOMAIN_NAME`);
    }
    getWorkList() {
        return this.http.get('http://healthinsight:8082/curis/qms/work_list/');
    }
    getLibrary() {
        return this.http.get('http://healthinsight:8082/curis/qms/measure_list/undefined/undefinded');
    }
    getMeasureDetails() {
        return this.http.get('http://healthinsight:8082/curis/qms/spv/hedis_member_list');
    }
}
