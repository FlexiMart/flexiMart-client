import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideMenuDialogComponent } from '../dialogbox/side-menu-dialog.component';
import { FilterDialogComponent } from '../filter/filter-dialog.component';
import { DataTransferService } from '../services/data-transfer/data-transfer.service';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  mediaSub!: Subscription;
  // deviceXs!: boolean;
  selectedDistricts: string[] | undefined;
  selectedMandals: string[] | undefined;
  enableStateOption:boolean=false;
  enableDistrictOption:boolean=false;
  enableMandalOption:boolean=false;
  enableFilterOption:boolean=false;

  //india states list
  stateList = GlobalConstants.indiaStates;
  districtList = GlobalConstants.districts;
  mandalList = GlobalConstants.telanganaDistictMandals;

  //sidebar menu details
  sideBarMenuTitles = GlobalConstants.sideBarMenuTitles;

  //side menu sub titles 
  sideMenuSubTitles = [
    {
      "agricultureSubTitles": [
        {
          "title": 'Agriculture',
          "url": '../assets/images/agriculture/agriculture-tractor.jpg',
          "name": 'Agriculture Tractor'
        },
        {
          "url": '../assets/images/agriculture/bull-cultivate-items.jpg',
          "name": 'Bull Cultivate Items'
        },
        {
          "url": '../assets/images/agriculture/current-motor.jpg',
          "name": 'Current Motor'
        },
        {
          "url": '../assets/images/agriculture/drip-motor.jpg',
          "name": 'Drip Motor'
        },
        {
          "url": '../assets/images/agriculture/human-cultivate-items.jpg',
          "name": 'Human Cultivate Items'
        },
        {
          "url": '../assets/images/agriculture/pesticide-machine.jpg',
          "name": 'Pesticide Machine'
        },
        {
          "url": '../assets/images/agriculture/solar-set.jpg',
          "name": 'Solar Set'
        },
        {
          "url": '../assets/images/agriculture/tractor-cultivate-items.jpg',
          "name": 'Tractor Cultivate Items'
        }
      ]
    },
    {
      "animalSubTitles": [
        {
          "title": 'Animals',
          "url": '../assets/images/animals/bull.jpg',
          "name": 'Bull'
        },
        {
          "url": '../assets/images/animals/cow.jpg',
          "name": 'Cow'
        },
        {
          "url": '../assets/images/animals/buffalo.jpg',
          "name": 'Buffalo'
        },
        {
          "url": '../assets/images/animals/goat.jpg',
          "name": 'Goat'
        },
        {
          "url": '../assets/images/animals/sheep.jpg',
          "name": 'Sheep'
        },
        {
          "url": '../assets/images/animals/dog.jpg',
          "name": 'Dog'
        },
        {
          "url": '../assets/images/animals/hen.jpg',
          "name": 'Hen'
        },
        {
          "url": '../assets/images/animals/rabbit.jpg',
          "name": 'Rabbit'
        },
        {
          "url": '../assets/images/animals/donkey.jpg',
          "name": 'Donkey'
        }
      ]
    },
    {
      "furnitureSubTitles": [
        {
          "title": 'Furniture',
          "url": '../assets/images/furniture/dining_table.jpg',
          "name": 'Dining Table'
        },
        {
          "url": '../assets/images/furniture/sofa-set.jpg',
          "name": 'Sofa Set'
        },
        {
          "url": '../assets/images/furniture/dressing_table.jpg',
          "name": 'Dressing Table'
        },
        {
          "url": '../assets/images/furniture/bed.jpg',
          "name": 'Bed'
        },
        {
          "url": '../assets/images/furniture/almirah.jpg',
          "name": 'Almirah'
        },
        {
          "url": '../assets/images/furniture/diwan.jpg',
          "name": 'Diwan'
        },
        {
          "url": '../assets/images/furniture/door.jpg',
          "name": 'Door'
        },
        {
          "url": '../assets/images/furniture/computer_chair.jpg',
          "name": 'Computer Table & Chair'
        },
        {
          "url": '../assets/images/furniture/studytable_chair.jpg',
          "name": 'Study Table & Chair'
        },
        {
          "url": '../assets/images/furniture/office_table.jpg',
          "name": 'Office Table'
        },
        {
          "url": '../assets/images/furniture/office_chair.jpg',
          "name": 'Office Chairs'
        },
        {
          "url": '../assets/images/furniture/folding_chair.jpg',
          "name": 'Folding Chair'
        },
        {
          "url": '../assets/images/furniture/plastic_chair.jpg',
          "name": 'Plastic Chair'
        }
      ]
    },
    {
      "electronicsubTitles": [
        {
          "title": 'Electronics',
          "url":  '../assets/images/electronics/laptop.png',
          "name": 'Laptop'
        },
        {
          "url": '../assets/images/electronics/mobiles.jpg',
          "name": 'Mobile'
        },
        {
          "url": '../assets/images/electronics/watches.jpg',
          "name": 'Watche'
        },
        {
          "url": '../assets/images/electronics/cameras.jpg',
          "name": 'Camera'
        },
        {
          "url": '../assets/images/electronics/desktop-computer.jpg',
          "name": 'Desktop Computer'
        },
        {
          "url": '../assets/images/electronics/tv.jpg',
          "name": 'TVs'
        },
        {
          "url": '../assets/images/electronics/refrigerators.jpg',
          "name": 'Refrigerator'
        },
        {
          "url":'../assets/images/electronics/washing-machine.jpg',
          "name": 'Washing Machine'
        },
        {
          "url": '../assets/images/electronics/air-conditioner.jpg',
          "name": 'Air Conditioner'
        },
        {
          "url": '../assets/images/electronics/air-cooler.jpg',
          "name": 'Air Cooler'
        },
        {
          "url": '../assets/images/electronics/generator.jpg',
          "name": 'Generator'
        },
        {
          "url": '../assets/images/electronics/inverter.jpg',
          "name": 'Inverters'
        },
        {
          "url": '../assets/images/electronics/home-theater.jpg',
          "name": 'Home Theater'
        },
        {
          "url": '../assets/images/electronics/printer-machine.jpg',
          "name": 'Xerox Machine'
        }
      ]
    },
    {
      "vehiclesSubTitles": [
        {
          "title": 'Vehicles',
          "url": '../assets/images/vehicles/bikes.jpg',
          "name": 'Bike'
        },
        {
          "url": '../assets/images/vehicles/cars.jpg',
          "name": 'Car'
        },
        {
          "url": '../assets/images/vehicles/auto.jpg',
          "name": 'Auto'
        },
        {
          "url": '../assets/images/vehicles/tractors.jpg',
          "name": 'Tractor'
        },
        {
          "url": '../assets/images/vehicles/bicycle.jpg',
          "name": 'Bicycle'
        },
        {
          "url": '../assets/images/vehicles/mini-bus.jpg',
          "name": 'Mini Bus'
        },
        {
          "url": '../assets/images/vehicles/big-bus.jpg',
          "name": 'Big Bus'
        },
        {
          "url": '../assets/images/vehicles/small-trucks.jpg',
          "name": 'Small Truck'
        },
        {
          "url": '../assets/images/vehicles/mini-trucks.jpg',
          "name": 'Mini Truck'
        },
        {
          "url": '../assets/images/vehicles/big-trucks.jpg',
          "name": 'Big Truck'
        }
      ]
    },
    {
      "saleRentSubTitles": [
        {
          "title": 'Sale&Rent',
          "url": '../assets/images/sale&rent/agriculture-land.jpg',
          "name": 'Agriculture Land'
        },
        {
          "url": '../assets/images/sale&rent/apartment-flats.jpg',
          "name": 'Apartment Flats'
        },
        {
          "url": '../assets/images/sale&rent/individual-house.jpg',
          "name": 'Individual House'
        },
        {
          "url": '../assets/images/sale&rent/commercial-shop.jpg',
          "name": 'Commercial shop'
        },
        {
          "url": '../assets/images/sale&rent/open-plots.jpg',
          "name": 'Open Plots'
        },
        {
          "url": '../assets/images/sale&rent/farm-house.jpg',
          "name": 'Farm House'
        },
        {
          "url": '../assets/images/sale&rent/villas.png',
          "name": 'Villas'
        },
        {
          "url": '../assets/images/sale&rent/under-construction.jpg',
          "name": 'Under Construction'
        }
      ]
    },
    {
      "labourWorkSubTitles": [
        {
          "title": 'Labour Work',
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Agriculture'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'House Construction'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Food Preparation'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Tractor Driver'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Larry  Driver'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Car Driver'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Shopping Mall'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Bar&Restaurant'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'House Clean'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Vehicle Loading'
        }
      ]
    },
    {
      "informationSubTitles": [
        {
          "title": 'Information',
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Hospitals'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Hotels'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Food Hotels'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Tiffin Centers'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Schools'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Collages'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Functional Halls'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Super Markets'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Diagnostics'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Gym Centers'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Diagnostics'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Gym Centers'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Travels'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Rental Cars'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Rental Bus'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Transfort Vehicles'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Mobile Shop'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'IT Institutes'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Govt Job Institutes'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Printing Centers'
        }
      ]
    },
    {
      "solutionSubTitles": [
        {
          "title": 'Solution',
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Agriculture'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Health'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Land Issue'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Marriage Issue'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Study Issue'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Court Issue'
        }

      ]
    }
  ]


  constructor(private observer: BreakpointObserver,
    private mediaObserver: MediaObserver,
    private dialog: MatDialog,
    private router: Router,
    private dataTransfer:DataTransferService) { }

  ngOnInit(): void {
  }
  openSideBarMenuDialogBox(selectedSideMenuItems: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "350px";
    if (selectedSideMenuItems == 'Agriculture') {
      dialogConfig.data = this.sideMenuSubTitles[0].agricultureSubTitles;
    } else if (selectedSideMenuItems == 'Animals') {
      dialogConfig.data = this.sideMenuSubTitles[1].animalSubTitles;
    } else if (selectedSideMenuItems == 'Furniture') {
      dialogConfig.data = this.sideMenuSubTitles[2].furnitureSubTitles;
    } else if (selectedSideMenuItems == 'Electronics') {
      dialogConfig.data = this.sideMenuSubTitles[3].electronicsubTitles;
    } else if (selectedSideMenuItems == 'Vehicles') {
      dialogConfig.data = this.sideMenuSubTitles[4].vehiclesSubTitles;
    } else if (selectedSideMenuItems == 'Sale&Rent') {
      dialogConfig.data = this.sideMenuSubTitles[5].saleRentSubTitles;
    } else if (selectedSideMenuItems == 'Labour Work') {
      dialogConfig.data = this.sideMenuSubTitles[6].labourWorkSubTitles;
    } else if (selectedSideMenuItems == 'Information') {
      dialogConfig.data = this.sideMenuSubTitles[7].informationSubTitles;
    } else if (selectedSideMenuItems == 'Solution') {
      dialogConfig.data = this.sideMenuSubTitles[8].solutionSubTitles;
    }
    if((selectedSideMenuItems != null) && (dialogConfig != null)){
      this.enableStateOption=true;
      this.enableFilterOption=true;
    }
    this.dataTransfer.setProductName=selectedSideMenuItems;
    this.sidenav.close();
    this.dialog.open(SideMenuDialogComponent, dialogConfig);
   
  }

  openFilterDialogBox(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "350px";
    this.dialog.open(FilterDialogComponent, dialogConfig);
  }

  selectingStateOnToolBar(selectedState: string): any {
    console.log(selectedState);
    if (selectedState == 'Andhra Pradesh') {
      this.selectedDistricts = this.districtList[0].andhraDistricts;
    } else if (selectedState == 'Telangana') {
      this.selectedDistricts = this.districtList[1].telanganaDistricts;
    }
    if(selectedState != null){
      this.enableDistrictOption=true;
    }
  }
  selectingDistrictOnToolBar(selectedDistrict: string): any {
    console.log(selectedDistrict);
    if (selectedDistrict == 'Adilabad') {
      this.selectedMandals = this.mandalList[0].adilabadMandals;
    } else if (selectedDistrict == 'Asifabad') {
      this.selectedMandals = this.mandalList[1].asifabadMandals;
    } else if (selectedDistrict == 'Bhadradri-Kothagudem') {
      this.selectedMandals = this.mandalList[2].bhadradriMandals;
    } else if (selectedDistrict == 'Bhupalpally') {
      this.selectedMandals = this.mandalList[3].bhupalpallyMandals;
    } else if (selectedDistrict == 'Gadwal') {
      this.selectedMandals = this.mandalList[4].gadwalMandals;
    } else if (selectedDistrict == 'Hanamkonda') {
      this.selectedMandals = this.mandalList[5].hanamkondaMandals;
    } else if (selectedDistrict == 'Hyderabad') {
      this.selectedMandals = this.mandalList[6].hyderabadMandals;
    } else if (selectedDistrict == 'Jagtial') {
      this.selectedMandals = this.mandalList[7].jagtialMandals;
    } else if (selectedDistrict == 'Janagama') {
      this.selectedMandals = this.mandalList[8].janagamaMandals;
    } else if (selectedDistrict == 'Kamareddy') {
      this.selectedMandals = this.mandalList[9].kamareddyMandals;
    } else if (selectedDistrict == 'Karimnagar') {
      this.selectedMandals = this.mandalList[10].karimnagarMandals;
    } else if (selectedDistrict == 'Khammam') {
      this.selectedMandals = this.mandalList[11].khammamMandals;
    } else if (selectedDistrict == 'Mahabubabad') {
      this.selectedMandals = this.mandalList[12].mahabubabadMandals;
    } else if (selectedDistrict == 'Mahabubnagar') {
      this.selectedMandals = this.mandalList[13].mahabubnagarMandals;
    } else if (selectedDistrict == 'Mancherial') {
      this.selectedMandals = this.mandalList[14].mancherialMandals;
    } else if (selectedDistrict == 'Medchal') {
      this.selectedMandals = this.mandalList[15].medchalMandals;
    } else if (selectedDistrict == 'Medak') {
      this.selectedMandals = this.mandalList[16].medakMandals;
    } else if (selectedDistrict == 'Mulugu') {
      this.selectedMandals = this.mandalList[17].muluguMandals;
    } else if (selectedDistrict == 'Nagarkurnool') {
      this.selectedMandals = this.mandalList[18].nagarkurnoolMandals;
    } else if (selectedDistrict == 'Nalgonda') {
      this.selectedMandals = this.mandalList[19].nalgondaMandals;
    } else if (selectedDistrict == 'Nirmal') {
      this.selectedMandals = this.mandalList[20].nirmalMandals;
    } else if (selectedDistrict == 'Narayanpet') {
      this.selectedMandals = this.mandalList[21].narayanpetMandals;
    } else if (selectedDistrict == 'Nizamabad') {
      this.selectedMandals = this.mandalList[22].nizamabadMandals;
    } else if (selectedDistrict == 'Peddapalli') {
      this.selectedMandals = this.mandalList[23].peddapalliMandals;
    } else if (selectedDistrict == 'Rajanna Sircilla') {
      this.selectedMandals = this.mandalList[24].rajannaSircillaMandals;
    } else if (selectedDistrict == 'Ranga Reddy') {
      this.selectedMandals = this.mandalList[25].rangaReddyMandals;
    } else if (selectedDistrict == 'Sangareddy') {
      this.selectedMandals = this.mandalList[26].sangareddyMandals;
    } else if (selectedDistrict == 'Siddipet') {
      this.selectedMandals = this.mandalList[27].siddipetMandals;
    } else if (selectedDistrict == 'Suryapet') {
      this.selectedMandals = this.mandalList[28].suryapetMandals;
    } else if (selectedDistrict == 'Vikarabad') {
      this.selectedMandals = this.mandalList[29].vikarabadMandals;
    } else if (selectedDistrict == 'Wanaparthy') {
      this.selectedMandals = this.mandalList[30].wanaparthyMandals;
    } else if (selectedDistrict == 'Warangal') {
      this.selectedMandals = this.mandalList[31].warangalMandals;
    } else if (selectedDistrict == 'Yadadri-Bhuvanagiri') {
      this.selectedMandals = this.mandalList[32].yadadriBhuvanagiriMandals;
    }
    if(selectedDistrict != null){
      this.enableMandalOption=true;
    }
  }

  selectingMandalOnToolBar(selectedMandal:any){
    console.log("Selected Mandal: "+selectedMandal);
  }
  openContactUs() {
    this.router.navigate(['contact']);
  }
  openAboutUs() {
    this.router.navigate(['about']);
  }
  openAddNewProduct() {
    this.router.navigate(['product']);
  }
  reloadCurrentPage(){
    window.location.reload();
  }


}
