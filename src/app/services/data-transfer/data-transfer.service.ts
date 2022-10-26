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

 set setProductType(productType:any){
  this.productType=productType;
 }

 get getProductName():any{
  return this.productName;
 }

 get getProductType():any{
  return this.productType;
 }
  
  constructor() { }
}
