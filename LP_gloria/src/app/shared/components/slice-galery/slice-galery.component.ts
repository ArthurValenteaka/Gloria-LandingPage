import { GaleryService } from './../../services/galery.service';
import { Subscription, Subject, takeUntil } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Navigation,Pagination } from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation,Pagination]);

@Component({
  selector: 'app-slice-galery',
  templateUrl: './slice-galery.component.html',
  styleUrls: ['./slice-galery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliceGaleryComponent implements OnInit {
  subscriptionGalery = new Subscription();
  private unsubscribeAll = new Subject();

  galeryImages: any[] = [];

  constructor(private galeryService: GaleryService) {}

  ngOnInit(): void {
    this.getImagesGalery();
  }

  getImagesGalery() {
    this.subscriptionGalery = this.galeryService
      .getImagesGalery()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: any) => {
        this.galeryImages = res.response;
        console.log(this.galeryImages);
      });
  }
}
