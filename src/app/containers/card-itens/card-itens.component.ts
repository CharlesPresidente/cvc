import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-itens',
  templateUrl: './card-itens.component.html',
  styleUrls: ['./card-itens.component.scss']
})
export class CardItensComponent implements OnInit {
  public haveDiscount = false;
  public itens = [
    { id: 1, 
      name: "carro econômico com ar", 
      photo: "../../../assets/img/car_01.png", 
      operator: "../../../assets/img/opetator_01.png",
      discount: {
        have: true,
        text: "desconto",
        value: "20%"
      }
    },
    { id: 2, name: "carro cinza", photo: "../../../assets/img/car_02.png", operator: "../../../assets/img/opetator_02.png"},
    { id: 3, name: "carro vermelho", photo: "../../../assets/img/car_01.png", operator: "../../../assets/img/opetator_02.png"},
    { id: 4, name: "carro cinza", photo: "../../../assets/img/car_02.png", operator: "../../../assets/img/opetator_01.png"},
  ]

  constructor() { 
  }

  ngOnInit() {
  }

}
