import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-coin',
  templateUrl: './select-coin.component.html',
  styleUrls: ['./select-coin.component.scss']
})
export class SelectCoinComponent implements OnInit {
  public coin = "Moeda:";
  public listCoins = [
    {item: "Real"},
    {item: "Dolar"},
    {item: "Iens"},
    {item: "Pesos"},
    {item: "Euro"},
    {item: "Libra"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
