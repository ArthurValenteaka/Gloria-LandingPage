import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  Scrollbar,
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Scrollbar, Autoplay, Pagination, Navigation]);
@Component({
  selector: 'app-sponsor-area',
  templateUrl: './sponsor-area.component.html',
  styleUrls: ['./sponsor-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SponsorAreaComponent implements OnInit {
  @Input() sponsor: any;

  constructor() {}

  ngOnInit(): void {
  }


}
