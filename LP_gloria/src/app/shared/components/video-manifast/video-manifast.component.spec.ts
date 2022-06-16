import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoManifastComponent } from './video-manifast.component';

describe('VideoManifastComponent', () => {
  let component: VideoManifastComponent;
  let fixture: ComponentFixture<VideoManifastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoManifastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoManifastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
