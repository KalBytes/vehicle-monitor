import { Component, OnInit } from '@angular/core';
import { CardData } from './components/types';
import { CARDS_DATA } from './constant';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public cards: CardData[] = CARDS_DATA;

  constructor() {}
}
