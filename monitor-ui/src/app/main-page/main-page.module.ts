import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainPageRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [MainPageComponent, CardComponent],
  exports: [MainPageComponent, CardComponent],
})
export class MainPageModule {}
