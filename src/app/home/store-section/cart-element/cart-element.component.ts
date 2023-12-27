import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.css'],
})
export class CartElementComponent implements OnInit {
  constructor() {}

  @Input() cartBeefElements: {
    name: string;
    details: string;
    imgUrl: string;
    price?: number;
  };

  @Input() cartChickenElements: {
    name: string;
    details: string;
    imgUrl: string;
    price: number;
  };

  @Input() cartLambElememnts: {
    name: string;
    details: string;
    imgUrl: string;
    price: number;
  };

  njefornow(price: any) {
    console.log(price.textContent);
  }
  ngOnInit() {}
}
