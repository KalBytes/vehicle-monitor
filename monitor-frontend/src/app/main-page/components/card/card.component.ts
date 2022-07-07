import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardData: CardData;

  constructor() {}

  ngOnInit() {}
}
