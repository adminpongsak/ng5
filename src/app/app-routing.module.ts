import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//โหลดหน้า home และ abount เข้ามา
import { AbountComponent } from './abount/abount.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  } ,
  {
    path:'abount',
    component: AbountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
