import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmagazinesComponent } from './emagazines.component';

describe('EmagazinesComponent', () => {
  let component: EmagazinesComponent;
  let fixture: ComponentFixture<EmagazinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmagazinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
