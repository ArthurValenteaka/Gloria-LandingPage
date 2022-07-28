import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowHelpComponent } from './how-help.component';

describe('HowHelpComponent', () => {
  let component: HowHelpComponent;
  let fixture: ComponentFixture<HowHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
