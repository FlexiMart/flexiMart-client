import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { NgxOtpInputModule } from 'ngx-otp-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { SideMenuDialogComponent } from './dialogbox/side-menu-dialog.component';
import { ContactUsComponent } from './contactUs/contact-us.component';
import { AboutUsComponent } from './aboutUs/about-us.component';
import { AddNewProductComponent } from './product/add-new-product/add-new-product.component';
import { FilterDialogComponent } from './filter/filter-dialog.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: "Loading...",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  pbColor: "#7f1734",
  bgsColor: "#7f1734",
  fgsColor: "#7f1734",
  fgsType: SPINNER.threeStrings,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    SideMenuDialogComponent,
    ContactUsComponent,
    AboutUsComponent,
    AddNewProductComponent,
    FilterDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxOtpInputModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
