import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbarColored: boolean = false;

  currentPage = this.route.url

  constructor(private route: ActivatedRoute, ) {}

  ngOnInit(): void {
    console.log(this.route);

  }

}
