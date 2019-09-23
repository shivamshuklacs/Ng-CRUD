import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadComponent } from './head/head.component';
import { AllusersComponent } from './allusers/allusers.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { UserbyidComponent } from './userbyid/userbyid.component';


const routeProduct:Routes=[
  
  {
    path:'api/viewUser',
    component:AllusersComponent
  },
  {
    path:'api/addUser',
    component:AddComponent
  },
  {
    path:'api/UserById',
    component:UserbyidComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    AddComponent,
    AllusersComponent,
    UserbyidComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,RouterModule.forChild(routeProduct)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }