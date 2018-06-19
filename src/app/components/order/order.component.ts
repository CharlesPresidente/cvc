import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public order = "Ordenar por:";
  public listOrderBy = [
    {item: "Menor preço"},
    {item: "Maior preço"},
    {item: "Recomendado"},
    {item: "Ordem alfabetica"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
