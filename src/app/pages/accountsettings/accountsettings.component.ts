import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent implements OnInit {

  

  ngOnInit(): void {
  }

  currentComponent: string = 'myprofile';

  showComponent(componentName: string) {
    this.currentComponent = componentName;
  }

  selectButton(button: string) {
    this.currentComponent = button;
  }

  constructor(public dialog: MatDialog) {}

  openDeleteAccountModal(): void {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // You can perform additional actions here if needed
    });
  }
}
