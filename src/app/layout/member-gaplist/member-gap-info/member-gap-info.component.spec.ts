import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MemberGapInfoComponent } from './member-gap-info.component';
import { PageHeaderModule } from '../../../shared/modules/page-header/page-header.module';
describe('MemberGapInfoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  RouterTestingModule, PageHeaderModule, HttpClientTestingModule ],
      declarations: [MemberGapInfoComponent]
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(MemberGapInfoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
