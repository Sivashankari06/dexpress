import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  currentComponent: string = 'dashboard';

  showComponent(componentName: string) {
    this.currentComponent = componentName;
  }

  selectButton(button: string) {
    this.currentComponent = button;
  }
 
}
