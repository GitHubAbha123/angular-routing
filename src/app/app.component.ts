import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  /*template:`<p [ngClass]="{colorClass:classOne,italicsClass:classTwo,boldClass:classThree}" >Paragraph writing by Abhay</p>
            <button appHighlight class = "boldClass" [class.colorClass] ="classThree"(click)='toggle()'>Toggle</button>
        `,*/
  styleUrls: ['./app.component.css']
  /*styles:[`.colorClass{color:red}
            .italicsClass{font-style:italic}
            .boldClass{font-weight:bold}`]*/
})
export class AppComponent {
  person: string = '';

  classOne: boolean = true;
  classTwo: boolean = true;
  classThree: boolean = false;
  classesToApply: string = "italicsClass colorClass";
  applyClass: boolean = true;

  toggle() {
    this.classOne = !this.classOne;
    this.classTwo = !this.classTwo;
    this.classThree = !this.classThree;


  }
  title = 'Angular Router!!';


}

