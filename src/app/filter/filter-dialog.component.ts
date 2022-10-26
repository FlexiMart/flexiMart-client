import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataTransferService } from '../services/data-transfer/data-transfer.service';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
  minPrice:string | undefined;
  maxPrice:string | undefined;
  resultOfCheckBox:string | undefined;
  allComplete: boolean = false;
  genderTypes=['Male','Female','Both'];
  types=['New','Old'];
  
  agricultureFurnitureFilter:boolean= false;
  animalFilter:boolean= false;
  animalBullCowFilter:boolean= false;
  furnitureFilter:boolean= false;
  electronicsLaptopFilter:boolean= false;
  



  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>,
    private dataTransfer:DataTransferService) {
    
   }

  ngOnInit(): void {
    console.log("Product Name: "+this.dataTransfer.getProductName);
    console.log("Product Type: "+this.dataTransfer.getProductType);
    if((this.dataTransfer.getProductName === 'Agriculture') || (this.dataTransfer.getProductName === 'Furniture')){
      this.agricultureFurnitureFilter=true;
    } else if((this.dataTransfer.getProductName === 'Animals') && (this.dataTransfer.getProductType ==='Bull' || this.dataTransfer.getProductType ==='Cow')){
      this.animalBullCowFilter=true;
    } else if(this.dataTransfer.getProductName === 'Animals'){
      this.animalFilter=true;
    } else if((this.dataTransfer.getProductName === 'Electronics') && (this.dataTransfer.getProductType === 'Laptop')){
      this.electronicsLaptopFilter=true;
    }
  }

  setAll(completed: any){
   // console.log(completed);
   this.resultOfCheckBox=completed;
  }

  filterProductList(){
    console.log("minPrice: " +this.minPrice+" maxPrice: "+this.maxPrice+" Type: "+this.resultOfCheckBox);
    this.dialogRef.close();
    
  }

}
