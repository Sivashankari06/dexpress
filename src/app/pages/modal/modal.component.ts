import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { OkdeletemodalComponent } from '../okdeletemodal/okdeletemodal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,public dialog: MatDialog) {}

  onCancel(): void {
    this.dialogRef.close(); // Closes the modal without any action
  }

  onDelete(): void {
    // Perform the delete action here
    console.log('Account deleted');
    this.dialogRef.close(); // Closes the modal after the action
    const dialogRef = this.dialog.open(OkdeletemodalComponent);
  }

  ngOnInit(): void {
  }

}
