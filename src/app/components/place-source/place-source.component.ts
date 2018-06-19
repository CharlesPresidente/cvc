import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-source',
  templateUrl: './place-source.component.html',
  styleUrls: ['./place-source.component.scss']
})
export class PlaceSourceComponent implements OnInit {
  public placeSource = "São Paulo - São Paulo / BR, Brasil ";

  constructor() { }

  ngOnInit() {
  }

}
