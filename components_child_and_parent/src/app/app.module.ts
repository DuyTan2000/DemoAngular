import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemDetailsMetadataComponent } from './item-details-metadata/item-details-metadata.component';
import { ItemOutputComponent } from './item-output/item-output.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, ItemDetailComponent, ItemDetailsMetadataComponent, ItemOutputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
