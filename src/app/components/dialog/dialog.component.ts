import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from './../../prodivder/api.service'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  deprtmentName: string;
  departmenDescription: string;

  constructor(
    private apiService: ApiService,
    public thistDialogRef: MatDialogRef<DialogComponent>,
  ) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    let department = {
      name: this.deprtmentName,
      description: this.departmenDescription
    }
    this.apiService.addDep(department).subscribe(res => {
      this.thistDialogRef.close(res);
    })
    
  }

  onCloseCancel() {
    this.thistDialogRef.close("Cancel");
  }

}
