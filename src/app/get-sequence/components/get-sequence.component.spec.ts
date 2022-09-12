import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSequenceComponent } from './get-sequence.component';

describe('GetSequenceComponent', () => {
  let component: GetSequenceComponent;
  let fixture: ComponentFixture<GetSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSequenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
