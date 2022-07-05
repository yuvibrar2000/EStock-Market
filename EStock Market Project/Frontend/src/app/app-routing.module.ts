import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ViewStockComponent } from './view-stock/view-stock.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'add' },
  {path:'add' , component:AddCompanyComponent},
  {path:'view' , component:ViewStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddCompanyComponent , ViewStockComponent]
