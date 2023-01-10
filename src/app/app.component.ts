import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  checkRoute() {
    let routeNow = this.router.url;

    if (routeNow.includes('/rock-in-rio') || routeNow.includes('/doacoes')){
      return false
    } else {
      return true
    }

  }

  title = 'LP_gloria';
}
