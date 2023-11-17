// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidsInfoComponent } from './bids-info/bids-info.component';
// Import other components as needed

const routes: Routes = [
  { path: '', component: BidsInfoComponent }, // Set the default route to BidsInfoComponent
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
