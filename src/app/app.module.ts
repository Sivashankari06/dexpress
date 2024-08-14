import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { PagesComponent } from './pages/pages.component';
import { SampleComponent } from './pages/sample/sample.component';
import { TobbyComponent } from './pages/sample/tobby/tobby.component';
import { AccountsettingsComponent } from './pages/accountsettings/accountsettings.component';
import { ModalComponent } from './pages/modal/modal.component';
import { OkdeletemodalComponent } from './pages/okdeletemodal/okdeletemodal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MyprofileComponent } from './pages/accountsettings/myprofile/myprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SidenavComponent,
    PagesComponent,
    SampleComponent,
    TobbyComponent,
    AccountsettingsComponent,
    ModalComponent,
    OkdeletemodalComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,         // Import MatDialogModule
    MatButtonModule          // Import MatButtonModule for buttons
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


