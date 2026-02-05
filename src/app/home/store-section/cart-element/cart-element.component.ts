import { Component, OnInit, Input, Injectable } from '@angular/core';
import { CartServiceService } from '../../cart-service.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.css'],
})
export class CartElementComponent implements OnInit {
  constructor(private cartService: CartServiceService) {}

  cartEls = [];

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

  njefornow(price: any, name: any, details: any, imgUrl: any) {
    // const idk =
    this.cartEls.push({
      price: price.textContent,
      name: name.textContent,
      details: details.textContent,
      imgUrl: imgUrl.textContent,
    });

    this.cartService.cartElement = [...this.cartEls];
    console.log(this.cartEls);
  }
  ngOnInit() {}
}
