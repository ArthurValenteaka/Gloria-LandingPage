import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader-gloria',
  templateUrl: './loader-gloria.component.html',
  styleUrls: ['./loader-gloria.component.scss']
})
export class LoaderGloriaComponent implements OnInit {

  @Input() loader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
