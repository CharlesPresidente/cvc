import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.scss']
})
export class EconomyComponent implements OnInit {
  public economy = "Ecomonize até 35%";
  public includeFlight = "Incluir Voo";
  public includeHotel = "Incluir Hotel";

  constructor() { }

  ngOnInit() {
  }

}
