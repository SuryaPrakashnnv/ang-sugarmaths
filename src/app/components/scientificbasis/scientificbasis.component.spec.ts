import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificbasisComponent } from './scientificbasis.component';

describe('ScientificbasisComponent', () => {
  let component: ScientificbasisComponent;
  let fixture: ComponentFixture<ScientificbasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificbasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificbasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
