import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `  	
  	<h2 [class]="titleClass" [ngStyle]="titleStyles">Hello world!</h2>
  	<p>Author: {{myObj.name}}<p>
  	<ul>
  		<li [ngClass]="cndCls" *ngFor="let dpt of myArr">{{dpt}}</li>
  	</ul>
  	<p *ngIf="cnd then yes else no"></p>
  	<ng-template #yes>Yes it is</ng-template>
  	<ng-template #no>No it is not</ng-template>
  	<br>  	
  	<img src="{{imgSrc}}">
  	<img [src]="imgSrc">
  	<img bind-src="imgSrc">
  	<br>
  	  <p>Service data: {{someProperty}} </p>
  	<br>
  	<button [disabled]="btnSts" (click)="myEvent($event)">My Button</button>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
  	h2{text-decoration: underline;}
  	button{background: red;}
  	.title-class{color: blue;}
  	.cdn-cls{color: green;}
  `]
})
export class AppComponent {
  // Data interpolation
  title = 'ang4 app';
  myObj = {
  	name: 'Venky',
  	age: 32
  };
  myArr = ['mobile', 'web', 'testing'];
  cnd = false;

  // Property binding
  imgSrc = "favicon.ico";
  btnSts = false;

  // Event binding
  myEvent(event){
  	console.log('Event binding works');
  }

  // CSS class binding
  titleClass = 'title-class';
  cndCls = {'cdn-cls':true};

  // Style binding
  titleStyles = {
  	'font-size': '3em',
  	'font-family': 'Arial'
  };

  //Services
  constructor(public dataService:DataService){}

  someProperty;
  ngOnInit(){
  	console.log(this.dataService.cars);
  	this.someProperty = this.dataService.myData
  };

}
