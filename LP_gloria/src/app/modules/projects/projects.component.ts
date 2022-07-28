import { ProjectsService } from './../../shared/services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  subscriptionProjects = new Subscription();
  private unsubscribeAll = new Subject();

  projects: any[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getRecentProjects();
  }

  getRecentProjects() {
    this.subscriptionProjects = this.projectsService
      .getRecentProjects()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: any) => {
        this.projects = res.response;
        console.log(this.projects);
      });
  }
}
