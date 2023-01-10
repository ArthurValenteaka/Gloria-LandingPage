import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderGloriaComponent } from './loader-gloria.component';

describe('LoaderGloriaComponent', () => {
  let component: LoaderGloriaComponent;
  let fixture: ComponentFixture<LoaderGloriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderGloriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderGloriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
