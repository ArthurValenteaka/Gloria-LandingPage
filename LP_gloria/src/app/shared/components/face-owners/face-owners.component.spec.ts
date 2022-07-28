import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceOwnersComponent } from './face-owners.component';

describe('FaceOwnersComponent', () => {
  let component: FaceOwnersComponent;
  let fixture: ComponentFixture<FaceOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceOwnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
