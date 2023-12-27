import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-combo-elements',
  templateUrl: './combo-elements.component.html',
  styleUrls: ['./combo-elements.component.css'],
})
export class ComboElementsComponent {
  @Input() cartComboElements: {
    name: string;
    details: any;
    imgUrl: string;
    price?: number;
  };
}
