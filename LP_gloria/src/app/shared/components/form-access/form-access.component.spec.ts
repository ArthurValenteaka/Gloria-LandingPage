import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccessComponent } from './form-access.component';

describe('FormAccessComponent', () => {
  let component: FormAccessComponent;
  let fixture: ComponentFixture<FormAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
