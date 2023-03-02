import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KhenThuongComponent } from './khen-thuong/khen-thuong.component';
import { TotNghiepComponent } from './tot-nghiep/tot-nghiep.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tn',
    pathMatch: 'full'
  },
  {
    path: 'tn',
    component: TotNghiepComponent
  },
  {
    path: 'kt',
    component: KhenThuongComponent
  },
  {
    path: '**',
    redirectTo: 'tn'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
