import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasygiftsComponent } from './fantasygifts.component';

describe('FantasygiftsComponent', () => {
  let component: FantasygiftsComponent;
  let fixture: ComponentFixture<FantasygiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasygiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasygiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
