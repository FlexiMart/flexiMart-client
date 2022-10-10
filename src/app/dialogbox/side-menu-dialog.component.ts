import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'app-side-menu-dialog',
  templateUrl: './side-menu-dialog.component.html',
  styleUrls: ['./side-menu-dialog.component.scss']
})
export class SideMenuDialogComponent implements OnInit {
  subMenuDialogTitle!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SideMenuDialogComponent>) { }

  ngOnInit(): void {
    this.subMenuDialogTitle=this.data[0].title;
  }
  getValue(event:any){
    console.log("Submenu: "+event);
    this.dialogRef.close();
}

}
