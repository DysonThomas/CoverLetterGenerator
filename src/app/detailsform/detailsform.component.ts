import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
export class DetailsformComponent implements OnInit {
  positionname:any="";
  companyname:any="";
  template:any="";
  constructor() { }

  generatePDF(){
    console.log(this.companyname)
    this.template=localStorage.getItem('template')
    console.log(this.template)
  }

  ngOnInit(): void {
  }

}
