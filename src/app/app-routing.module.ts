import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ListComponent } from './components/department/list/list.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { UsersComponent } from './components/department/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: ListComponent },
  { path: 'new-departmant', component: AddDepartmentComponent },
  { path: 'users/department/:depId', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}