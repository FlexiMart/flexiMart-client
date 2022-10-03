import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private productName!: string;
  private productType!: string;

 set setProductName(productName:any){
  this.productName=productName;
 }

 get getProductName():any{
  return this.productName;
 }
  
  constructor() { }
}
