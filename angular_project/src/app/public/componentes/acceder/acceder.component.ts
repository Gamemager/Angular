import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.component.html',
  styleUrls: ['./acceder.component.css']
})
export class AccederComponent implements OnInit{

  constructor(){
    
  }

  ngOnInit(): void {

  }
  
  login(form:NgForm){

    const user = form.value.user
    const password= form.value.password
  }

}
