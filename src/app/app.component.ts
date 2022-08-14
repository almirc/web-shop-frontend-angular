import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontendShop';
  isCollapsed = false;
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
