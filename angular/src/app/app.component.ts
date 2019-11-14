import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//where to inject
 // template:'<h1>  {{title}}</h1>', //if temlate code <=3 lines
  templateUrl: './app.component.html',//where to display  if template code >=3 lines
  styleUrls: ['./app.component.css'] //how to display
})
export class AppComponent {
  title = 'Angular at Atos |Syntel'; //what to display
}
