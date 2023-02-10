import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { UtilityService } from 'src/app/app.services/utility.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.css']
})
export class OfAndFromComponent implements OnInit {

  constructor(private _utility: UtilityService) { }

  employee: Employee;

  ngOnInit(): void {

    //Of() opeartor

    let Obs1 = of('Neel', 'Nitin', 'Mukesh');
    Obs1.subscribe(next => {
      console.log(next);
      this._utility.appendElementToListElement(next, 'elContainer1');
    },
      error => {
        console.log(error)
      },
      () => {
        console.log('completed')
      });

    let Obs2 = of({ firstName: 'Neel', middleName: 'Nitin', lastName: 'Mukesh' });
    Obs2.subscribe(next => {
      console.log(next);
      this.employee = next;
    },
      error => {
        console.log(error)
      },
      () => {
        console.log('completed')
      });

    //**end Of() operator */


    //from() - Array 

    let Obs3 = from(['Neel', 'Nitin', 'Mukesh']);
    Obs3.subscribe(next => {
      console.log(next);
      this._utility.appendElementToListElement(next, 'elContainer3');
    },
      error => {
        console.log(error)
      },
      () => {
        console.log('completed')
      });

    //from() - Promise

    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve("promise resolved")
      }, 5000);
    });

    let Obs4 = from(promise);
    Obs4.subscribe(next => {
      console.log(next);
      this._utility.appendElementToListElement(next, 'elContainer4');
    });

    let Obs5 = from('deepak');
    Obs5.subscribe(next => {
      console.log(next);
      this._utility.appendElementToListElement(next, 'elContainer5');
    });

  } 

}
