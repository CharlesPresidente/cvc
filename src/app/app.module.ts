import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RentACarComponent } from './pages/rent-a-car/rent-a-car.component';
import { FiltersComponent } from './containers/filters/filters.component';
import { ControlsComponent } from './containers/controls/controls.component';
import { CardItensComponent } from './containers/card-itens/card-itens.component';
import { PlaceSourceComponent } from './components/place-source/place-source.component';
import { PlaceDevolutionComponent } from './components/place-devolution/place-devolution.component';
import { DateDevolutionComponent } from './components/date-devolution/date-devolution.component';
import { DateSourceComponent } from './components/date-source/date-source.component';
import { EconomyComponent } from './components/economy/economy.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { NumberPagesComponent } from './components/number-pages/number-pages.component';
import { OrderComponent } from './components/order/order.component';
import { SelectCoinComponent } from './components/select-coin/select-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    RentACarComponent,
    FiltersComponent,
    ControlsComponent,
    CardItensComponent,
    PlaceSourceComponent,
    PlaceDevolutionComponent,
    DateDevolutionComponent,
    DateSourceComponent,
    EconomyComponent,
    SearchButtonComponent,
    NumberPagesComponent,
    OrderComponent,
    SelectCoinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
