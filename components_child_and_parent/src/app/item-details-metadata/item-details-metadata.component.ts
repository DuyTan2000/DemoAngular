import { Component, OnInit, Input } from '@angular/core';
import { booleanAttribute } from '@angular/core'; 

@Component({
  selector: 'app-item-details-metadata',
  templateUrl: './item-details-metadata.component.html',
  styleUrls: ['./item-details-metadata.component.css']
})
export class ItemDetailsMetadataComponent implements OnInit {
  @Input({required: true}) item!: string; // Second, decorate the property with required metadata

  @Input({transform: booleanAttribute}) itemAvailability!: boolean; // Second, decorate the property with transform

  constructor() { }

  ngOnInit() {
  }

}