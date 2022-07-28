import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGloriaComponent } from './about-gloria.component';

describe('AboutGloriaComponent', () => {
  let component: AboutGloriaComponent;
  let fixture: ComponentFixture<AboutGloriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGloriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGloriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
