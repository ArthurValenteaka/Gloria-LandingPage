import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockInRioComponent } from './rock-in-rio.component';

describe('RockInRioComponent', () => {
  let component: RockInRioComponent;
  let fixture: ComponentFixture<RockInRioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockInRioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockInRioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
