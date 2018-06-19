import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-pages',
  templateUrl: './number-pages.component.html',
  styleUrls: ['./number-pages.component.scss']
})
export class NumberPagesComponent implements OnInit {
  public pages = "Itens por página:";
  public numberPages = [
    {item: 10},
    {item: 25},
    {item: 50},
    {item: 75},
    {item: 100}
  ]

  constructor() { }

  ngOnInit() {
  }

}
