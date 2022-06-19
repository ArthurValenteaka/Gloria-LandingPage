import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowKnowSignsComponent } from './how-know-signs.component';

describe('HowKnowSignsComponent', () => {
  let component: HowKnowSignsComponent;
  let fixture: ComponentFixture<HowKnowSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowKnowSignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowKnowSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
