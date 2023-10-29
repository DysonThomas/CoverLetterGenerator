import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showUpdateTemplate : boolean = false;
  showUpdateDetails : boolean = true;
  inputValue: string = '';
  
  onUpdateClick(){
    this.showUpdateTemplate=!this.showUpdateTemplate;
  }
  onUpdateDetailsClick(){
    this.showUpdateDetails=!this.showUpdateDetails;
  }
}
