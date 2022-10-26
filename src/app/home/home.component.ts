import { Component, Input, OnInit } from '@angular/core';
import { DataTransferService } from '../services/data-transfer/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() 
  deviceXs!: boolean;

  constructor(private dataTransfer:DataTransferService) { }

  topVal = 0;
  onScroll(e: any) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }
  ngOnInit(): void {
  }

}
