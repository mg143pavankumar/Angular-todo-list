import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = '0.1.0';

  constructor() {
    // setTimeout(() =>  {
    //   this.title = "Let's start building"
    // }, 1000);
  }
}
