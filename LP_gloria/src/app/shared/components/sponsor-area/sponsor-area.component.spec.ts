import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorAreaComponent } from './sponsor-area.component';

describe('SponsorAreaComponent', () => {
  let component: SponsorAreaComponent;
  let fixture: ComponentFixture<SponsorAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
