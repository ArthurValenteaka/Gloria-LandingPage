import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss']
})
export class OurProjectsComponent implements OnInit {

  @Input() projects : any[]=[];

  constructor() { }

  ngOnInit(): void {
  }
}
