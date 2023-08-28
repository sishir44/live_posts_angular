import { Component } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private BackEndService: BackEndService){}

//ngOnInit is executed when we created the component and execute only once 
  ngOnInit(): void{
    this.onFetch();
  } 

  onSave(){
    console.log("Save !!!")
    this.BackEndService.saveData();
  }

  onFetch(){
    console.log("etching!!!");
    this.BackEndService.fetchData();

  }

}
