import { GaleryService } from './../../services/galery.service';
import { Subscription, Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice-galery',
  templateUrl: './slice-galery.component.html',
  styleUrls: ['./slice-galery.component.scss'],
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
