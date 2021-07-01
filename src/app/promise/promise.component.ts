import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  employees: Employee[] = [

    { id: 100, name: "amit" },
    { id: 101, name: "pappu" },
    { id: 102, name: "suraj" },
    { id: 103, name: "nikhil" },
    { id: 104, name: "manish" },
    { id: 105, name: "sumit" }

  ];

  //it is used to store filterd list of employee
  filteredEmployees: Employee[];
  requestedEmployee;
  result1;
  result2;
  result3;

  //track search term
  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm; //getter is called everytime when we need the value of this property 
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    //in adition to assign value we want to filter employee
    this.filteredEmployees = this.filtereEmployees(value);

    // this.requestedEmployee = this.filtereEmployees(value);
    // console.log(this.requestedEmployee);
    // this.requestedEmployee.then(res=>{
    //   this.filteredEmployees = res;
    // }).catch(res=>{
    //   this.filteredEmployees = res;      
    // });
  }

  // Ex:03
  filtereEmployees(searchString: string) {
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

    // return setTimeout(() => {
    //   let employeeList = null;
    //   return employeeList = new Promise((resolve,rejects)=>{

    //     this.employees.filter((employee)=>{

    //       if(employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1){
    //           return resolve(employee);
    //       }else{
    //         return rejects(null);
    //       }
    //     });
    //   });

    // },3000);  
  }


  constructor() {

    this.filteredEmployees = this.employees;

  }

  ngOnInit(): void {


    //Ex : 01
    //promise take argument as function with two arguments
    // let getEmployee =  new Promise(function(resolve,rejects){
    //     
    
    ("promise is resolved ");
    // });

    //shortcut # arrow functionn from ES6 
    let getEmployee = new Promise((resolve, rejects) => {
      // resolve("record found  ");
      // rejects("record not found");
      if (this.getemployeeByEmployeeId(102)) {
        resolve("employee record found  ");
      } else {
        rejects("employee record not found ");
      }
    });

    getEmployee.then(res => {
      console.log("success #", res);
    }).catch(res => {
      console.log("fail  #", res);
    });


    // Ex:02
    let response = { responseCode: 200, responseData: { id: 101, name: "pappu" } };

    let searchEmployee = new Promise((resolve, rejects) => {

      if (response != null && response.responseCode == 200) {
        return setTimeout(() => {
          resolve(response.responseData);
        }, 3000);
      } else {
        return setTimeout(() => {
          rejects("not found")
        }, 3000);
      }
    });

    searchEmployee.then(res => {
      console.log("success #", JSON.stringify(res));
    }).catch(res => {
      console.log("fail  #", res);
    })
  }

  getemployeeByEmployeeId(id: Number) {

    return setTimeout(() => {

      this.employees.filter((employee) => {
        if (employee.id == id) {
          return true
        } else {
          return false;
        }
      });

    }, 3000);

  }

  //**************************************** */
  /************** Async and Await *************************/
  // it can be used in native javascript code also
  // when we use a function with asynk keyword then it   always return promise 
  // await -- it wait until promise resolve then execute afterword code 


  onClick() {
    // console.log(getData()); 
    // getData().then(data => console.log(data));
    console.log(" /************** Async and Await *************************/");
    console.log("Ex 01*************step 01");
    getData().then(console.log); 
    console.log("Ex 01*************step 02");
    getData1();
  }
  
  emp:Employee = { id: 101, name: "pappu" };
  getEmployee = new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve(this.emp);
      }, 5000);
  });

  // Ex:01 with promise 
  fetch1(){
    this.result1 = document.getElementById('result1');
    this.result1.innerText = "fetching data..";
    this.getEmployee.then(res =>{
        this.result1.innerText =  JSON.stringify(res);
    });
  }
  
  async fetch2(){
    this.result2 = document.getElementById('result2');
    this.result2.innerText = "fetching data..";
    let data = await this.getEmployee;
    this.result2.innerText =  JSON.stringify(data);
  }
  
  
  async fetch3(){
    let jsonPlaceholderUserData = fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())

    this.result3 = document.getElementById('result3');
    this.result3.innerText = "fetching data..";
    //promise 
    // jsonPlaceholderUserData.then(res=>{
    //   this.result3.innerText = JSON.stringify(res);
    //  });

    let data = await jsonPlaceholderUserData;
    this.result3.innerText = JSON.stringify(data);
    
  }
  

}

async function getData() {
  console.log("data recived");
}

async function getData1() {

  console.log("Ex 02*************step 01");
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Ex 02*************step  02");
      resolve(example02());
    }, 3000);
  });
  let response = await promise;
  //wait until promise resolve
  console.log("Ex 02*************step 05");
  console.log(response); 
}

function example02(){
  console.log("Ex 02*************step  03");
  return setTimeout(() => {
    return console.log("executing ...step 04");
  }, 300);
}
