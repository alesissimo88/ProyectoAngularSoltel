import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeComponent } from './ade.component';

describe('AdeComponent', () => {
  let component: AdeComponent;
  let fixture: ComponentFixture<AdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
