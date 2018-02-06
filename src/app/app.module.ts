import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//material components
import {
  MatButtonModule, 
  MatTableModule, 
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule  } from '@angular/material';
//components
import { AppComponent } from './app.component';
import { ListComponent } from './components/department/list/list.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { UsersComponent } from './components/department/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DialogComponent } from './components/dialog/dialog.component';
//providers
import { ApiService } from './prodivder/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddDepartmentComponent,
    UsersComponent,
    PageNotFoundComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
