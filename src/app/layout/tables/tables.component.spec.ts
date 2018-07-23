import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(TablesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
