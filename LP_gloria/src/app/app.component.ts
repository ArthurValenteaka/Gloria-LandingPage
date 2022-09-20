import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  routeRio: string = this.router.url;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  title = 'LP_gloria';
}
