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
  constructor(private cartService: CartServiceService) {
    this.cartService.cartElement = this.cartEls;
  }
  cartEls: { price: any; name: any; details: any; imgUrl: any };

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
    // console.log([price.textContent, name.textContent, details.textContent]);
    this.cartService.cartElement = {
      price: price.textContent,
      name: name.textContent,
      details: details.textContent,
      imgUrl: imgUrl.textContent,
    };

    console.log(this.cartService.cartElement);
    // console.log(this.cartEls);
  }
  ngOnInit() {}
}
