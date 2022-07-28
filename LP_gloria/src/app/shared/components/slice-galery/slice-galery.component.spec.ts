import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliceGaleryComponent } from './slice-galery.component';

describe('SliceGaleryComponent', () => {
  let component: SliceGaleryComponent;
  let fixture: ComponentFixture<SliceGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliceGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliceGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
