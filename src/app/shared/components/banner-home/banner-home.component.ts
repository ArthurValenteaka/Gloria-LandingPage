import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss'],
})
export class BannerHomeComponent implements OnInit {
  @Input() url: string = '';
  @Input() imgHome: string = '';
  @Input() firstParagraph: string = '';
  @Input() seccondParagraph: string = '';
  @Input() thirdParagraph: string = '';
  @Input() seccondText: string = '';
  @Input() backgroudColor: string = '#FFCA05';
  voluntaryPage = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/home/voluntario') {
      this.voluntaryPage = true;
    }
  }

  changePosition(route: string) {
    switch (route) {
      case '/home':
        return '-60vh center';
      case '/home/voluntario':
        return '-200px center';
    }
    return;
  }
}
