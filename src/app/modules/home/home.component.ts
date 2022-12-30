import { SponsorService } from './../../shared/services/sponsor.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  analyticsProjects = new Subscription();
  sponsorProjects = new Subscription();
  private unsubscribeAll = new Subject();

  constructor(
    private analyticsService: AnalyticsService,
    private sponsorService: SponsorService
  ) {}

  analytics: any;
  sponsor: any;

  ngOnInit(): void {
    this.getSponsor();
    this.getAnalytics();
  }

  getAnalytics() {
    this.analyticsProjects = this.analyticsService
      .getAnalytics()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: any) => {
        this.analytics = res.response;
      });
  }

  getSponsor() {
    this.sponsorProjects = this.sponsorService
      .getSponsor()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: any) => {
        this.sponsor = res;
        console.log(this.sponsor);
      });
  }
}
