import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'home', component:HomeComponent},
  { path:'service', component:ServiceComponent},
  { path:'about', component:AboutComponent},
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'**', component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
