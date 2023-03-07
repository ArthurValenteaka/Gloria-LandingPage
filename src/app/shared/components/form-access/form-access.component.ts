import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-access',
  templateUrl: './form-access.component.html',
  styleUrls: ['./form-access.component.scss']
})
export class FormAccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToFooter(){
    window.scrollTo(0,document.body.scrollHeight);
  }

}
