import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { StoreSectionComponent } from './home/store-section/store-section.component';
import { ClosingSectionComponent } from './home/closing-section/closing-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home/home-component.component';
import { CartElementComponent } from './home/store-section/cart-element/cart-element.component';
import { ComboElementsComponent } from './home/store-section/combo-elements/combo-elements.component';
import { CartComponent } from './home/cart/cart.component';
import { CartServiceService } from './home/cart-service.service';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsPageComponent },
  { path: '', component: HomeComponentComponent },
  { path: 'contact-us', component: ContactPageComponent },
  { path: 'store-section', component: StoreSectionComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    StoreSectionComponent,
    ClosingSectionComponent,
    FooterComponent,
    ContactPageComponent,
    AboutUsPageComponent,
    HomeComponentComponent,
    CartElementComponent,
    ComboElementsComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [CartServiceService],

  bootstrap: [AppComponent],
})
export class AppModule {}
