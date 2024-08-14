import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-okdeletemodal',
  templateUrl: './okdeletemodal.component.html',
  styleUrls: ['./okdeletemodal.component.scss']
})


export class OkdeletemodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OkdeletemodalComponent>,private router: Router) {}

  onCancel(): void {
    this.dialogRef.close(); // Closes the modal without any action
  }

  onDelete(): void {
    // Perform the delete action here
    console.log('Account deleted');
    this.dialogRef.close(); // Closes the modal after the action
    // this.router.navigate(['./sidenav']);
  }

  ngOnInit(): void {
  }

}

