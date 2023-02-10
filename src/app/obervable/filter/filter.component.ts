import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { User } from 'src/app/model/model'
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  data1;
  data2;
  users: User[];
  employees:Employee[] = [

    { firstName: 'amit',  lastName: 'mehra', skills:'angular',department:{ id:1, name:'Electronics' } },
    { firstName: 'dinesh',lastName: 'sharma', skills:'java' ,department:{ id:2, name:'Computer Science' } },
    { firstName: 'gopal', lastName: 'das', skills:'paython' ,department:{ id:3, name:'Electronics' } },
    { firstName: 'sumit', lastName: 'nehra',skills:'HTML/CSS' ,department:{ id:4, name:'Electrical' } },
  ]

  ngOnInit(): void {

    let jsonPlaceholderUserData = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json());

    // Ex:01
    jsonPlaceholderUserData.then(res => {
      this.users = res;
      // console.log("users ", this.users);
      from(this.users)
        .pipe(
          filter(user => user.username.length == 8),
          toArray()
        ).subscribe(res1 => {
          this.data1 = res1;
          // console.log("data ", this.data1);
        });
    });

    //Ex:02
    from(this.employees)
    .pipe(
      filter(employee => employee.department.name == 'Electronics'),
      toArray()
    ).subscribe(res1 => {
      this.data2 = res1;
      // console.log("data ", this.data2);
    });

    //Ex:03
    from(this.employees)
    .pipe(
      filter(employee => employee.department.name == 'Electronics'),
      toArray()
    ).subscribe(res1 => {
      this.data2 = res1;
      // console.log("data ", this.data2);
    });



  }

}
