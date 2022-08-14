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
  private unsubscribeAll = new Subject();

  constructor(private projectsService: AnalyticsService) {}

  analytics: any;

  ngOnInit(): void {
    this.getAnalytics();
  }

  getAnalytics() {
    this.analyticsProjects = this.projectsService
      .getAnalytics()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: any) => {
        this.analytics = res.response;
        console.log(this.analytics);
      });
  }
}
