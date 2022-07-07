import { Component, OnInit } from '@angular/core';

const LOGO = '../../../../src/assets/Logo_svg.svg';

@Component({
  selector: 'app-default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.scss']
})
export class DefaultViewComponent implements OnInit {
  public logoPath: string = LOGO;
  constructor() { }

  ngOnInit() {
  }

}
