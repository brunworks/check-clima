import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksPage } from './bookmarks.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookmarksPage],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BookmarksModule { }
