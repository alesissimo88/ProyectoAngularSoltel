import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachilleratoComponent } from './bachillerato.component';

describe('BachilleratoComponent', () => {
  let component: BachilleratoComponent;
  let fixture: ComponentFixture<BachilleratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachilleratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachilleratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
