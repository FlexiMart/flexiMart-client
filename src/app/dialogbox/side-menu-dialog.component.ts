import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DataTransferService } from '../services/data-transfer/data-transfer.service';

@Component({
  selector: 'app-side-menu-dialog',
  templateUrl: './side-menu-dialog.component.html',
  styleUrls: ['./side-menu-dialog.component.scss']
})
export class SideMenuDialogComponent implements OnInit {
  subMenuDialogTitle!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<SideMenuDialogComponent>,
              private dataTransfer:DataTransferService) { }

  ngOnInit(): void {
    this.subMenuDialogTitle=this.data[0].title;
  }
  getValue(event:any){
    console.log("Submenu: "+event);
    this.dataTransfer.setProductType=event;
    this.dialogRef.close();
}

}
