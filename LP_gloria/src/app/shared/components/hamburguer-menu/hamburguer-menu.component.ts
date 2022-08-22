import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrls: ['./hamburguer-menu.component.scss'],
})
export class HamburguerMenuComponent implements OnInit {
  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen
  }
}
