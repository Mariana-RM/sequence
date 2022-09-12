import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNumberComponent } from './request-number.component';

describe('RequestNumberComponent', () => {
  let component: RequestNumberComponent;
  let fixture: ComponentFixture<RequestNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
