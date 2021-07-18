import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UtilityService } from 'src/app/app.services/utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  courses: string[] = ['Angular', 'JavaScript', 'Java', 'HTMl/CSS', 'Paython', 'Node JS']
  status: string;
  status1: string;
  status3: string;
  subCustObs2: Subscription;

  names: string[] = [ 'Neel','Nitin','Mukesh','','Revina','Meena','Teena','Reena']
  name: any;
  constructor(private _utility: UtilityService) { }


  ngOnInit(): void {


    //Ex:01 ( Manual )
    //it takes argument as annonymous function like ES6 arrow function 
    // normally data emited time to time from observable
    const custObs1 = Observable.create(observer => {
      // observer.next();
      // observer.error();
      // observer.complete();
      for (let i = 0; i < this.courses.length; i++) {
        setTimeout(() => {

          // observer.next(this.courses[i]);
          if (this.courses[i] === 'Paython') {
            // observer.next(this.courses[i]);
            observer.complete();
            // this.status = 'completed'
          } else if (this.courses[i] == 'HTMl/CSS') {
            observer.error(new Error('not programming language'));
            // this.status = 'error'
          } else {
            observer.next(this.courses[i]);
          }

        }, 1000 * i);
      }
    });

    custObs1.subscribe(res => {
      // console.log(JSON.stringify(res));
      this._utility.appendElementToListElement(res, 'elContainer1')
    },
      (eror) => {
        this.status = 'error'
      },
      () => {
        this.status = 'completed'
      });

    //Ex:02 (Custome Interval Observable )
    const custObs2 = Observable.create(observer => {
      let count = 0;
      //setInterval is a javascript function which take two argument first one is annonymous function and secound one is delay
      setInterval(() => {
        observer.next(this.courses[count]);
        if (this.courses[count] === 'Java') {
          observer.complete();
          // this.status1 = 'completed'
        }
        if (this.courses[count] == 'HTMl/CSS') {
          observer.error(new Error('not programming language'));
          // this.status1 = 'error'
        }
        count++;
      }, 3000);
    });

    this.subCustObs2 = custObs2.subscribe(res => {
      // console.log(res);
      this._utility.appendElementToListElement(res, 'elContainer2')
    },
      (eror) => {
        this.status1 = 'error';
      },
      () => {
        this.status1 = 'completed';
      });

    //Ex : 03 ( Random Names )
    const custObs3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(this.names[count]);
        if (this.names[count] == '') {
          observer.error(new Error('invalid'));
        }
        if (this.names[count] === 'Reena') {
          observer.complete();
        }
        count++;
      }, 2000);
    });

    custObs3.subscribe(res => {
      // console.log(res);
      this.name = res;
    },
    (eror) => {
      this.status3 = 'error';
    },
    () => {
      this.status3 = 'completed';
    });
  }

  ngOnDestroy(): void {
    this.subCustObs2.unsubscribe();
  }

}
