import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoreactComponent } from './alumnoreact.component';

describe('AlumnoreactComponent', () => {
  let component: AlumnoreactComponent;
  let fixture: ComponentFixture<AlumnoreactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoreactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
