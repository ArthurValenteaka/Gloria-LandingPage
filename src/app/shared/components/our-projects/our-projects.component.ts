import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Navigation,Pagination } from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation,Pagination]);

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OurProjectsComponent implements OnInit {

  @Input() projects : any[]=[];

  constructor() { }

  ngOnInit(): void {
  }
}
