import { Component, OnInit, ViewChild,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { MatStepper } from '@angular/material/stepper';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  // @ViewChild('stepper') 
  // private myStepper!: MatStepper;
  isStepAction=false;
  isPersonInfoEditable=true;
  isMobileVerifyEditable=true;
  isNewProductEditable=true;
  isAgricultureForm=false;
  isAnimalsForm=false;
  isFurnitureForm=false;
  isElectronicsForm=false;
  isVehiclesForm=false;
  isSaleRentForm=false;
  isLabourWorkForm=false;
  isInformationForm=false;
  otpInputConfig:NgxOtpInputConfig={
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class'
    }
  }

  foods: Food[] = [
    { value: 'ap-0', viewValue: 'Andhra Pradesh' },
    { value: 'ts-1', viewValue: 'Telangana' },
  ];
  statesList = GlobalConstants.indiaStates;
  districtList: string[] | undefined;
  mandalList: string[] | undefined;
  isLinear = true;
  productType=['Agriculture','Animal','Furniture','Electronics','Vehicles','Sale&Rent','Labour Work','Information'];
  productNamesList=GlobalConstants.agricultureProductName;
  animalNamesList=GlobalConstants.animalNamesList;
  funitureNamesList=GlobalConstants.furnitureNames;
  electronicNamesList=GlobalConstants.electronicNamesList;
  vehicleNameList=GlobalConstants.vehicleNameList;
  personInfoForm: any = FormGroup;
  mobileVerifyForm: any = FormGroup;
  addNewProductGroup:any= FormGroup;
  productFirst:any=FormGroup;
  productSecond:any=FormGroup;
  formPhoneGroup!: FormGroup;
  agricultureForm:any=FormGroup;
  animalsForm:any=FormGroup;
  furnitureForm:any=FormGroup;
  electronicsForm:any=FormGroup;
  vehicleForm:any=FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {
     }

  ngOnInit(): void {
    this.personInfoForm = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      contactNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      hno: [null, [Validators.required]],
      village: [null, [Validators.required]],
      mandal: [null, [Validators.required]],
      district: [null, [Validators.required]],
      state: [null, [Validators.required]]
    });
    
    this.addNewProductGroup=this.formBuilder.group({
      productType:[null,[Validators.required]],
     
    
    });
    this.agricultureForm=this.formBuilder.group({
      productName:[null,[Validators.required]],
      yearOfModel:[null,[Validators.required]],
      type:[null,[Validators.required]],
      price:[null,[Validators.required]]
    });
    this.animalsForm=this.formBuilder.group({
      animalName:[null,[Validators.required]],
      gender:[null,[Validators.required]],
      breedType:[null,[Validators.required]],
      noOfQuantity:[null,[Validators.required]],
      price:[null,[Validators.required]]

    });
    this.furnitureForm=this.formBuilder.group({
      furnitureName:[null,[Validators.required]],
      woodType:[null,[Validators.required]],
      type:[null,[Validators.required]],
      price:[null,[Validators.required]]
    });
    this.electronicsForm=this.formBuilder.group({
      electronicName:[null,[Validators.required]],
      brandName:[null,[Validators.required]],
      yearOfModel:[null,[Validators.required]],
      type:[null,[Validators.required]],
      price:[null,[Validators.required]]
    });
    this.vehicleForm=this.formBuilder.group({
      vehicleName:[null,[Validators.required]],
      brandName:[null,[Validators.required]],
      modelName:[null,[Validators.required]],
      fuelType:[null,[Validators.required]],
      usedKM:[null,[Validators.required]],
      type:[null,[Validators.required]],
      price:[null,[Validators.required]]
    });
    
  }


  saveUserInfo() {
    console.log('Save User Info');
   
  }
  changeState(value: string) {
    console.log(value);
    if (value === 'Andhra Pradesh') {
      this.districtList = GlobalConstants.districts[0].andhraDistricts;
    } else if (value === 'Telangana') {
      this.districtList = GlobalConstants.districts[1].telanganaDistricts;
    }
  }
  changeDistrict(value: string) {
    console.log(value);
    if (value === 'Adilabad') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[0].adilabadMandals;
    } else if (value === 'Asifabad') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[1].asifabadMandals;
    } else if (value === 'Bhadradri-Kothagudem') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[2].bhadradriMandals;
    } else if (value === 'Bhupalpally') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[3].bhupalpallyMandals;
    } else if (value === 'Gadwal') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[4].gadwalMandals;
    }  else if (value === 'Hanamkonda') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[5].hanamkondaMandals;
    } else if (value === 'Hyderabad') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[6].hyderabadMandals;
    } else if (value === 'Jagitial') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[7].jagtialMandals;
    } else if (value === 'Janagama') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[8].janagamaMandals;
    } else if (value === 'Kamareddy') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[9].kamareddyMandals;
    } else if (value === 'Karimnagar') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[10].karimnagarMandals;
    } else if (value === 'Khammam') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[11].khammamMandals;
    } else if (value === 'Mahabubabad') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[12].mahabubabadMandals;
    } else if (value === 'Mahabubnagar') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[13].mahabubnagarMandals;
    } else if (value === 'Mancherial') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[14].mancherialMandals;
    } else if (value === 'Medchal') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[15].medchalMandals;
    } else if (value === 'Medak') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[16].medakMandals;
    } else if (value === 'Mulugu') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[17].muluguMandals;
    } else if (value === 'Nagarkurnool') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[18].nagarkurnoolMandals;
    } else if (value === 'Nalgonda') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[19].nalgondaMandals;
    } else if (value === 'Nirmal') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[20].nirmalMandals;
    } else if (value === 'Narayanpet') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[21].narayanpetMandals;
    } else if (value === 'Nizamabad') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[22].nizamabadMandals;
    } else if (value === 'Peddapalli') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[23].peddapalliMandals;
    } else if (value === 'Rajanna Sircilla') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[24].rajannaSircillaMandals;
    } else if (value === 'Ranga Reddy') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[25].rangaReddyMandals;
    } else if (value === 'Sangareddy') {
      this.mandalList = GlobalConstants.telanganaDistictMandals[26].sangareddyMandals;
    } else if(value ==='Siddipet'){
      this.mandalList=GlobalConstants.telanganaDistictMandals[27].siddipetMandals;
    } else if(value ==='Suryapet'){
      this.mandalList=GlobalConstants.telanganaDistictMandals[28].suryapetMandals;
     } else if(value ==='Vikarabad'){
      this.mandalList=GlobalConstants.telanganaDistictMandals[29].vikarabadMandals;
     } else if(value ==='Wanaparthy'){
      this.mandalList=GlobalConstants.telanganaDistictMandals[30].wanaparthyMandals;
     }else if(value ==='Warangal'){
      this.mandalList=GlobalConstants.telanganaDistictMandals[31].warangalMandals;
     }else if(value ==='Yadadri-Bhuvanagiri'){
      this.mandalList=GlobalConstants.telanganaDistictMandals[32].yadadriBhuvanagiriMandals;
     }
  }
  changeMandal(value: string) {
    console.log(value);
  }
      
  handleOtpChange(otpValue:any){
    console.log(otpValue);
    if(parseInt(otpValue) != 1234){
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  }

  handleFillEvent(otpValue:any,index:number,stepper:MatStepper){
    console.log(otpValue);
       if(parseInt(otpValue) == 1234){
      Swal.fire('Thank you...', 'You Registerd succesfully!, You are Aligible to Add New Product.', 'success')
      .then(()=>{
        console.log("Ok");
        stepper.selectedIndex=index;
        this.isPersonInfoEditable=false;
        this.isMobileVerifyEditable=false;
        });
        } else {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        ).then(()=>{
          stepper.selectedIndex=index-2;
        });
        
      }
    
  }
  forwardAction(index:number,stepper:MatStepper){
    stepper.selectedIndex=index;
  }
  changeProductType(value:string){
    console.log(value);
    if(value ==='Agriculture'){
      this.isAnimalsForm=false;
      this.isFurnitureForm=false;
      this.isElectronicsForm=false;
      this.isVehiclesForm=false;
      this.isSaleRentForm=false;
      this.isLabourWorkForm=false;
      this.isInformationForm=false;
      this.isAgricultureForm=true;
    } else if(value ==='Animal'){
      this.isAgricultureForm=false
      this.isFurnitureForm=false;
      this.isElectronicsForm=false;
      this.isVehiclesForm=false;
      this.isSaleRentForm=false;
      this.isLabourWorkForm=false;
      this.isInformationForm=false;
      this.isAnimalsForm=true;
    } else if(value ==='Furniture'){
      this.isAgricultureForm=false;
      this.isAnimalsForm=false;
      this.isElectronicsForm=false;
      this.isVehiclesForm=false;
      this.isSaleRentForm=false;
      this.isLabourWorkForm=false;
      this.isInformationForm=false;
      this.isFurnitureForm=true;
    } else if(value ==='Electronics'){
      this.isAgricultureForm=false;
      this.isAnimalsForm=false;
      this.isFurnitureForm=false;
      this.isVehiclesForm=false;
      this.isSaleRentForm=false;
      this.isLabourWorkForm=false;
      this.isInformationForm=false;
      this.isElectronicsForm=true;
    } else if(value ==='Vehicles'){
      this.isAgricultureForm=false;
      this.isAnimalsForm=false;
      this.isFurnitureForm=false;
      this.isElectronicsForm=false;
      this.isSaleRentForm=false;
      this.isLabourWorkForm=false;
      this.isInformationForm=false;
      this.isVehiclesForm=true;
    } else if(value ==='Sale&Rent'){
      this.isAgricultureForm=false;
      this.isAnimalsForm=false;
      this.isFurnitureForm=false;
      this.isElectronicsForm=false;
      this.isVehiclesForm=false;
      this.isLabourWorkForm=false;
      this.isInformationForm=false;
      this.isSaleRentForm=true;
    }else if(value ==='Labour Work'){
      this.isAgricultureForm=false;
      this.isAnimalsForm=false;
      this.isFurnitureForm=false;
      this.isElectronicsForm=false;
      this.isVehiclesForm=false;
      this.isSaleRentForm=false;
      this.isInformationForm=false;
      this.isLabourWorkForm=true;
    } else if(value ==='Information'){
      this.isAgricultureForm=false;
      this.isAnimalsForm=false;
      this.isFurnitureForm=false;
      this.isElectronicsForm=false;
      this.isVehiclesForm=false;
      this.isSaleRentForm=false;
      this.isLabourWorkForm=false;
      this.isInformationForm=true;
      
    } 
  }

  // forwardAction(stepper:MatStepper){
  //   this.stepper.next();
  // }

  addNewPersonAction(){
    console.log(this.agricultureForm.value);
    console.log(this.animalsForm.value);
    console.log(this.furnitureForm.value);
    this.isNewProductEditable=false;
  }

  doneAction(){
    this.router.navigate(['/index']);
  }
  
}
