import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  agricultureImagePath = '/assets/images/agriculture/agriculture.png';
  animalsImagePath = '/assets/images/animals/animals.jpg';
  furnitureImagePath = '/assets/images/furniture/furnitures.jpg';
  electronicImagePath = '/assets/images/electronics/electronics.jpg';
  vehiclesImagePath = '/assets/images/vehicles/vehicles.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
