import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserComponent } from './user/user.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { PaymentComponent } from './payment/payment.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  
  {path:"Add_Product", component:ProductComponent},
  {path:"user_login",component:UserComponent},
  {path:"Admin_login",component:AdminComponent},
  {path:"home", component:AppComponent},
  {path:"user_home/:id",component:UserHomeComponent},
  {path:"cart/:id",component:CartComponent},
  {path:"admin-home",component:AdminHomeComponent},
  {path:"updateproduct/:id",component:UpdateProductComponent},
  {path:"manage-user",component:ManageUserComponent},
  {path:"manage-admin",component:ManageAdminComponent},
  {path:"payment/:total",component:PaymentComponent},
  {path:"bulk-upload",component:FileUploadComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
