import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramcreatorComponent } from './programcreator.component';

describe('ProgramcreatorComponent', () => {
  let component: ProgramcreatorComponent;
  let fixture: ComponentFixture<ProgramcreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramcreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
