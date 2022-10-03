import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../services/data-transfer/data-transfer.service';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {

  constructor(private dataTransfer:DataTransferService) {
    console.log(this.dataTransfer.getProductName);
   }

  ngOnInit(): void {
    console.log(this.dataTransfer.getProductName);
  }

}
