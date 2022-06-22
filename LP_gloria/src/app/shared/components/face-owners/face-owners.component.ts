import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-owners',
  templateUrl: './face-owners.component.html',
  styleUrls: ['./face-owners.component.scss'],
})
export class FaceOwnersComponent implements OnInit {
  @Input() owners: any;

  constructor() {}

  ngOnInit(): void {}
}
