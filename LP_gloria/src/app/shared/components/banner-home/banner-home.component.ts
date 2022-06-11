import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss'],
})
export class BannerHomeComponent implements OnInit {
  @Input() url: string = '';
  @Input() imgHome: string = '';
  constructor() {}

  ngOnInit(): void {}
}
