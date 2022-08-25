import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theme:boolean=false
  changingtheme(value:boolean){
      this.theme=value
  }
}
