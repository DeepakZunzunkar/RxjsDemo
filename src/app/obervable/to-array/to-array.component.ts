import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
import { UtilityService } from 'src/app/app.services/utility.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor(private _utility: UtilityService) { }

  subscription: Subscription;

  employees:Employee[] = [

    { firstName: 'amit',  lastName: 'mehra' },
    { firstName: 'dinesh',lastName: 'sharma' },
    { firstName: 'gopal', lastName: 'das' },
    { firstName: 'sumit', lastName: 'nehra' },
  ]

  ngOnInit(): void {

    //Ex:01
    let source1 = interval(1000);
    this.subscription = source1.pipe(
      take(5),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      
      // below we can achieve using take operator , it will take only specified number of outputs 
      // in rxJs latest version we have to use pipe to use some opertaor 
      // if (res > 5) {
      //   this.subscription.unsubscribe();
      // }
      this._utility.appendElement(JSON.stringify(res),'elContainer1','p')
    });

    //Ex:02
    let source2 = from(this.employees).pipe(
      //take(2),
      toArray()
    );
    this.subscription = source2.subscribe(res => {
      console.log(res);
      this._utility.appendElement(JSON.stringify(res),'elContainer2','p')
    });
     
    //Ex:03

    let source3 = of('amit','dinesh','gopal','sumit').pipe(
      toArray()
    );
    this.subscription = source3.subscribe(res=>{
      console.log(res);
      this._utility.appendElement(JSON.stringify(res),'elContainer3','p')
    });

  }

  //check below behaviour 
  //route to toArray component and before Ex:01 output display just route to any other component ex: FromEvent component 
  //and see output of Ex:01 from toArray component will display result in FromEvent component

} 
