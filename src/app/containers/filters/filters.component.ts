import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public placeSource = "Local de retirada";
  public placeDevolution = "Local de devolução";
  public source = "Retirada";
  public devolution = "Devolução - 8 dia(s)";
  public otherPlace = "Devolver o carro em outro local";

  public otherPlaceDevolution = true;

  constructor() { }

  ngOnInit() {
  }

  public checkbox() {
    this.otherPlaceDevolution = !this.otherPlaceDevolution;
  }
}
