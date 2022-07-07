import { Component, OnInit } from '@angular/core';
import { NAVIGATION_MENU_CONFIG } from '@config/navigation-config';
import { NavigationMenuItem } from '../../../types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeSubMenuItem: string;
  public navigationMenuItems: NavigationMenuItem[] = NAVIGATION_MENU_CONFIG;
  constructor() { }

  ngOnInit() {
  }

}
