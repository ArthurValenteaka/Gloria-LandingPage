import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Navigation,Pagination } from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation,Pagination]);

@Component({
  selector: 'app-face-owners',
  templateUrl: './face-owners.component.html',
  styleUrls: ['./face-owners.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FaceOwnersComponent implements OnInit {
  @Input() owners: any;

  constructor() {}

  ngOnInit(): void {}
}
