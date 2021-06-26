import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  employees :Employee[] =[

    { id : 100, name:"amit" },
    { id : 101, name:"pappu" },
    { id : 102, name:"suraj" },
    { id : 103, name:"nikhil" },
    { id : 104, name:"manish" },
    { id : 105, name:"sumit" }

  ];
  
  constructor() {
  }
  
  ngOnInit(): void { 


    // Ex : 01
    // promise take argument as function with two arguments
    // let getEmployee =  new Promise(function(resolve,rejects){
    //     resolve("promise is resolved ");
    // });

    //shortcut # arrow functionn from ES6 
    let getEmployee =  new Promise((resolve,rejects)=>{
        // resolve("record found  ");
        // rejects("record not found");
        if(this.getemployeeByEmployeeId(102)){
          resolve("employee record found  ");
        }else{
          rejects("employee record not found ");
        }
    });

    getEmployee.then(res=>{
      console.log("success #",res);
    }).catch(res=>{
      console.log("fail  #" ,res);
    });

  }
 
  getemployeeByEmployeeId(id:Number){

      return setTimeout(() => {

        this.employees.filter((employee)=>{
          if(employee.id == id){
            return true
          }else{
            return false;
          }
        });

      },3000);   

  }
}

