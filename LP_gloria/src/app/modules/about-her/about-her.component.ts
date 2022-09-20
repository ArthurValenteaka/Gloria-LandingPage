import { AboutHerService } from './../../shared/services/about-her.service';
import { Subscription, Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-her',
  templateUrl: './about-her.component.html',
  styleUrls: ['./about-her.component.scss'],
})
export class AboutHerComponent implements OnInit {
  subscriptionOwners = new Subscription();
  private unsubscribeAll = new Subject();

  owners: any[] = [];

  constructor(private ownsersService: AboutHerService) {}

  ngOnInit(): void {
    this.getOwners();
  }

  getOwners() {
    this.subscriptionOwners = this.ownsersService
      .getOwners()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: any) => {
        this.owners = res.response;
      });
  }
}
