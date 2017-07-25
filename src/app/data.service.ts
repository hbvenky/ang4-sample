import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Honda', 'Hynduai', 'Swift'];
  myData = this.test();
  test(){  	
  	return "This is my service data"
  }

}
