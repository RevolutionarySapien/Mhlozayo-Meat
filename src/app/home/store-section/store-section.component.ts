import { Component } from '@angular/core';
import { CartElementComponent } from './cart-element/cart-element.component';

@Component({
  selector: 'app-store-section',
  templateUrl: './store-section.component.html',
  styleUrls: ['./store-section.component.css'],
})
export class StoreSectionComponent {
  beefElements = [
    {
      name: 'Burgers',
      details: 'pack of 4',
      imgUrl: 'assets/cart-imgs/burger-option.jpg',
      price: 160,
    },

    {
      name: 'Stewing beef',
      details: 'pack of 4',
      imgUrl: 'assets/cart-imgs/stewing-beef.jpg',
      price: 120,
    },

    {
      name: 'Mince',
      details: 'pack of 4',
      imgUrl: 'assets/cart-imgs/mince.jpg',
      price: 150,
    },

    {
      name: 'Sausage',
      details: 'pack of 4',
      imgUrl: 'assets/cart-imgs/sausage-option.jpg',
      price: 140,
    },
  ];

  chickenElements = [
    {
      name: 'Chicken Fillets',
      details: '600g-700g',
      imgUrl: 'assets/cart-imgs/chicken-fillets-option.jpg',
      price: 120,
    },

    {
      name: 'Chicken Pack',
      details: '1kg',
      imgUrl: 'assets/cart-imgs/chicken-pack.jpg',
      price: 115,
    },

    {
      name: 'Chicken Thighs',
      details: '600g-700g',
      imgUrl: 'assets/cart-imgs/chicken-thighs-option.jpg',
      price: 120,
    },

    {
      name: 'Chicken wings',
      details: '500g-600g',
      imgUrl: 'assets/cart-imgs/chicken-wings.jpg',
      price: 120,
    },
  ];
  lambElements = [
    {
      name: 'Stewing Lamb',
      details: '1,2kg',
      imgUrl: 'assets/cart-imgs/stewing-lamb.jpg',
      price: 120,
    },

    {
      name: 'Lamb Shank',
      details: '600g',
      imgUrl: 'assets/cart-imgs/lamb-shank.jpg',
      price: 120,
    },

    {
      name: 'Lamb Rib',
      details: '1.5kg - 2kg',
      imgUrl: 'assets/cart-imgs/lamb-rib.jpg',
      price: 120,
    },

    {
      name: 'Lamb Leg',
      details: '1.3kg - 2kg',
      imgUrl: 'assets/cart-imgs/lamb-leg.jpg',
      price: 120,
    },
  ];
  comboElements = [
    {
      name: 'Combo 1',
      details: [
        {
          mince: '5 Trays Mince',
        },
        { sausage: '5 Trays Sausage' },
        { burgerPatties: '4 Trays Burger Patties' },
        { stewingBeef: '1kg Stewing Beef' },
      ],
      imgUrl: 'assets/cart-imgs/combo.jpg',
      price: 650,
    },

    {
      name: 'Combo 2',
      details: [
        {
          mince: '5 Trays Mince',
        },
        { sausage: '5 Trays Sausage' },
        { burgerPatties: '4 Trays Burger Patties' },
        { stewingBeef: '1.5kg Stewing Beef' },
        { chickenTrays: '1.2kg Tray Chicken' },
        { periPeriSausage: '3 Trays Peri Peri Sausage' },
      ],
      imgUrl: 'assets/cart-imgs/combo.jpg',
      price: 800,
    },

    {
      name: 'Combo 3',
      details: [
        {
          mince: '5 Trays Mince',
        },
        { sausage: '5 Trays Sausage' },
        { burgerPatties: '4 Trays Burger Patties' },
        { stewingBeef: '2kg Stewing Beef' },
        { chickenTrays: '2kg Tray Chicken' },
        { periPeriSausage: '3 Trays Peri Peri Sausage' },
        { lambChops: '1.3kg Lamb Chops' },
      ],
      imgUrl: 'assets/cart-imgs/combo.jpg',
      price: 1000,
    },
  ];
}
