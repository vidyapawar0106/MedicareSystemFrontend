import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';
import { CartComponent } from './cart/cart.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HeaderComponent } from './header/header.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { PaymentComponent } from './payment/payment.component';
import { NgForm,NgModel } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    AdminComponent,
    
    UserHomeComponent,
    CartComponent,
    AdminHomeComponent,
    UpdateProductComponent,
    HeaderComponent,
    ManageUserComponent,
    ManageAdminComponent,
    PaymentComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
