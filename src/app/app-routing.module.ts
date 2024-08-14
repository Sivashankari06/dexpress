import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { PagesComponent } from './pages/pages.component';
import { SampleComponent } from './pages/sample/sample.component';
import { TobbyComponent } from './pages/sample/tobby/tobby.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to target on initial load
  { path: 'login', component: LoginComponent }, // Define the dashboard route
  { path: 'dashboard', component: DashboardComponent }, // Define the dashboard route
  { path: 'sidenav', component: SidenavComponent }, // Define the sidenav route
  { path: 'pages', component: PagesComponent }, 
  // other routes here

 {    
   path: 'sample', 
   component: SampleComponent, 
   children: [
     { path: 'tobby', component: TobbyComponent },
     { path: '', redirectTo: 'tobby', pathMatch: 'full' }
   ]
  },
   { path: '', redirectTo: '/sample', pathMatch: 'full' },
 
];


@NgModule({
  imports: 
  [ CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
