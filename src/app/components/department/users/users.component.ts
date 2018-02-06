import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../../prodivder/api.service'
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections'
import 'rxjs/add/operator/switchMap';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  depId: number;
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'description', 'departmentId', 'departmentName'];  

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.depId = params['depId']);
    this.apiService.getDepUsers(this.depId).subscribe(res => {
      this.users = this.search(this.depId, res);
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  search(key, mArray) {
    let result: any[] = [];
    for (var i=0; i < mArray.length; i++) {
      if (mArray[i].departmentId == key) {
        result.push(mArray[i])
      }
    }
    return result;
  }

}


