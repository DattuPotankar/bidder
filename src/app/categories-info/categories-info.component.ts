import { Component, OnInit } from '@angular/core';
import { CategoriesData, featuredCelebritiesData } from '../../bids-data'; // Import the data

@Component({
  selector: 'app-categories-info',
  templateUrl: './categories-info.component.html',
  styleUrls: ['./categories-info.component.css']
})
export class CategoriesInfoComponent implements OnInit {
 categories = CategoriesData;
 celebrities = featuredCelebritiesData;

  constructor() { }

  ngOnInit(): void {
  }

}
