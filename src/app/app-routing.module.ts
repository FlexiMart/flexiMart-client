import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './aboutUs/about-us.component';
import { ContactUsComponent } from './contactUs/contact-us.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AddNewProductComponent } from './product/add-new-product/add-new-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'product', component: AddNewProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
