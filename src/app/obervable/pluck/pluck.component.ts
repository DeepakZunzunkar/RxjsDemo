import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { from } from 'rxjs';
import { map, toArray, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  employees:Employee[] = [

    { firstName: 'amit',  lastName: 'mehra', skills:'angular',department:{ id:1, name:'Electronics' } },
    { firstName: 'dinesh',lastName: 'sharma', skills:'java' ,department:{ id:2, name:'Computer Science' } },
    { firstName: 'gopal', lastName: 'das', skills:'paython' ,department:{ id:3, name:'Electronics' } },
    { firstName: 'sumit', lastName: 'nehra',skills:'HTML/CSS' ,department:{ id:4, name:'Electrical' } },
  ]
  
  data1;
  data2;

  constructor() { }

  ngOnInit(): void {

    //  Ex:01
    from(this.employees).pipe(
      // map(data => data.firstName),
      pluck('firstName'),
      toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.data1=res;
    });

    //  Ex:02
    from(this.employees).pipe(
      pluck('department','name'),
      toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.data2=res;
    });

  }

}
