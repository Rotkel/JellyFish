import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../../prodivder/api.service'
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections'
import { Departments } from './../../../models/departments.model'

import {MatTableDataSource} from '@angular/material';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  departments: any;
   dataSource: any;
   displayedColumns: string[] = ['id', 'name', 'description', 'AddDep', 'DeleteDep']

   constructor(
    private apiService: ApiService,
    private router: Router,
    private dialog: MatDialog
  ) {  }

  ngOnInit() {
    this.apiService.getDepList().subscribe(res => {
      this.departments = res
      this.dataSource = new MatTableDataSource(this.departments);
    });
  }

  goToDepUsers(depId) {
    this.router.navigate(['users/department/', depId]);
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: "500px"
    })

    dialogRef.afterClosed().subscribe(res => {
      this.departments.push(res);
      this.dataSource = new MatTableDataSource(this.departments);
    })
  }

  removeDep(i, depId) {
    this.apiService.removeDep(depId).subscribe(res => {
      this.departments.splice(i, 1);
      this.dataSource = new MatTableDataSource(this.departments);
    });
  }
  
}
