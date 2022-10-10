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
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Pesticide Machine'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Current Motor'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Drip Motor'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Solar Set'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Bull Cultivate Items'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Human Cultivate Items'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Agriculture Tractor'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
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
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Laptop'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Mobile'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Watche'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Camera'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Desktop Computer'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'TVs'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Refrigerator'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Washing Machine'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Air Conditioner'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Air Cooler'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Generator'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Inverters'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Home Theater'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Xerox Machine'
        }
      ]
    },
    {
      "vehiclesSubTitles": [
        {
          "title": 'Vehicles',
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Bike'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Car'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Auto'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Tractor'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Bicycle'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Mini Bus'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Big Bus'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Small Truck'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Mini Truck'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Big Truck'
        }
      ]
    },
    {
      "saleRentSubTitles": [
        {
          "title": 'Sale&Rent',
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Land'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Plat'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Villas'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Commercial'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Individual House'
        },
        {
          "url": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          "name": 'Construction'
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
    // this.mediaSub = this.mediaObserver.media$.subscribe(
    //   (result: MediaChange) => {
    //     this.deviceXs = result.mqAlias === 'xs' ? true : false;
    //   }
    // );
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
    this.dataTransfer.setProductName=selectedSideMenuItems;
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

  }
  selectingDistrictOnToolBar(selectedDistrict: string): any {
    console.log(selectedDistrict);
    if (selectedDistrict == 'Adilabad') {
      this.selectedMandals = this.mandalList[0].adilabadMandals;
    } else if (selectedDistrict == 'Asifabad') {
      this.selectedMandals = this.mandalList[1].asifabadMandals;
    } else if (selectedDistrict == 'Bhadradri-Kothagudem') {
      this.selectedMandals = this.mandalList[2].bhadradriMandals;
    } else if (selectedDistrict == 'Bhoopalpally') {
      this.selectedMandals = this.mandalList[3].bhoopalpallyMandals;
    } else if (selectedDistrict == 'Gadwal') {
      this.selectedMandals = this.mandalList[4].gadwalMandals;
    } else if (selectedDistrict == 'Hyderabad') {
      this.selectedMandals = this.mandalList[5].hyderabadMandals;
    } else if (selectedDistrict == 'Jagtial') {
      this.selectedMandals = this.mandalList[6].jagtialMandals;
    } else if (selectedDistrict == 'Janagama') {
      this.selectedMandals = this.mandalList[7].janagamaMandals;
    } else if (selectedDistrict == 'Kamareddy') {
      this.selectedMandals = this.mandalList[8].kamareddyMandals;
    } else if (selectedDistrict == 'Karimnagar') {
      this.selectedMandals = this.mandalList[9].karimnagarMandals;
    } else if (selectedDistrict == 'Khammam') {
      this.selectedMandals = this.mandalList[10].khammamMandals;
    } else if (selectedDistrict == 'Mahabubabad') {
      this.selectedMandals = this.mandalList[11].mahabubabadMandals;
    } else if (selectedDistrict == 'Mahabubnagar') {
      this.selectedMandals = this.mandalList[12].mahabubnagarMandals;
    } else if (selectedDistrict == 'Mancherial') {
      this.selectedMandals = this.mandalList[13].mancherialMandals;
    } else if (selectedDistrict == 'Medchal') {
      this.selectedMandals = this.mandalList[14].medchalMandals;
    } else if (selectedDistrict == 'Medak') {
      this.selectedMandals = this.mandalList[15].medakMandals;
    } else if (selectedDistrict == 'Mulugu') {
      this.selectedMandals = this.mandalList[16].muluguMandals;
    } else if (selectedDistrict == 'Nagarkurnool') {
      this.selectedMandals = this.mandalList[17].nagarkurnoolMandals;
    } else if (selectedDistrict == 'Nalgonda') {
      this.selectedMandals = this.mandalList[18].nalgondaMandals;
    } else if (selectedDistrict == 'Nirmal') {
      this.selectedMandals = this.mandalList[19].nirmalMandals;
    } else if (selectedDistrict == 'Narayanpet') {
      this.selectedMandals = this.mandalList[20].narayanpetMandals;
    } else if (selectedDistrict == 'Nizamabad') {
      this.selectedMandals = this.mandalList[21].nizamabadMandals;
    } else if (selectedDistrict == 'Peddapalli') {
      this.selectedMandals = this.mandalList[22].peddapalliMandals;
    } else if (selectedDistrict == 'Rajanna Sircilla') {
      this.selectedMandals = this.mandalList[23].rajannaSircillaMandals;
    } else if (selectedDistrict == 'Ranga Reddy') {
      this.selectedMandals = this.mandalList[24].rangaReddyMandals;
    }
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

 

}
