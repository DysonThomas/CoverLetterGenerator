import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cvtemplate',
  templateUrl: './cvtemplate.component.html',
  styleUrls: ['./cvtemplate.component.css']
})
export class CvtemplateComponent implements OnInit {
inputValue:any=""
showCurrentTemplate:boolean=false;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('template')!=null){
      this.inputValue=localStorage.getItem('template');
    }
   
  }
  onSaveClick(){   
    localStorage.clear
    localStorage.setItem('template',JSON.stringify(this.inputValue))
    this.inputValue="";
  }
}
