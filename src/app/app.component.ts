import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app-component.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent{
  title = 'my-app';
  headers = ['Machine Id', 'System', 'Type', 'Realms', 'Basic', 'Open', 'Action'];   
  json = [];
  
  constructor(private appComponentService: AppComponentService) { }
 
  ngOnInit() {
    this.getJsonData();
  }
  
  getJsonData(){
	  this.appComponentService.getJsonData().subscribe((result: any) => {
		  if(result){
			  this.json = result;
		  }
	  }, () => {
		  console.log('Internal Server Error.')
	  });
  }
}
