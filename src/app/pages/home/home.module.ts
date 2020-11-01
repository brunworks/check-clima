import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    //Mod Redux
    StoreModule.forFeature('home', homeReducer),
    ReactiveFormsModule
  ]
})
export class HomeModule { }
