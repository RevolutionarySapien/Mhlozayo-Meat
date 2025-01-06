import { Component, OnInit } from '@angular/core';
import { CartElementComponent } from '../store-section/cart-element/cart-element.component';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartServiceService) {}
  cartEls = this.cartService.cartElement;
  ngOnInit(): void {
    this.logImport();
  }
  logImport() {
    console.log(this.cartEls);
  }
}
