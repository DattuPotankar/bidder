import { Component, OnInit } from '@angular/core';
import { BidsData } from '../../bids-data'; // Import the data

@Component({
  selector: 'app-bids-info',
  templateUrl: './bids-info.component.html',
  styleUrls: ['./bids-info.component.css']
})
export class BidsInfoComponent implements OnInit {

  bidsData = BidsData;
  activeBids = this.bidsData.filter(bid => bid.isActive);
  upcomingBids = this.bidsData.filter(bid => !bid.isActive);
  constructor() { }

  ngOnInit(): void {

  }

}
