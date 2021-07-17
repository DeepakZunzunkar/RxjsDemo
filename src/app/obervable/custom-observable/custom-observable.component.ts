import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityService } from 'src/app/app.services/utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  // courses =[
  //   { id:101, name: 'Angular'},
  //   { id:102, name: 'JavaScript'},
  //   { id:103, name: 'Java'},
  //   { id:106, name: 'HTMl/CSS'},
  //   { id:104, name: 'Paython'},
  //   { id:105, name: 'Node JS'}
    
  // ]

  courses :string[] = [ 'Angular','JavaScript','Java','HTMl/CSS','Paython','Node JS' ]
  status:string;

  constructor(private _utility: UtilityService) { }

  ngOnInit(): void {


    //Ex:01 ( Manual )
    //it takes argument as annonymous function like ES6 arrow function 
    // normally data emited time to time from observable
    const custObs1 = Observable.create(observer =>{
        // observer.next();
        // observer.error();
        // observer.complete();
        for(let i=0;i<this.courses.length;i++){
          setTimeout(() => {

            // observer.next(this.courses[i]);
            if(this.courses[i] === 'Paython' ){
              // observer.next(this.courses[i]);
              observer.complete();
              // this.status = 'completed'
            }else if(this.courses[i] == 'HTMl/CSS'){
              observer.error(new Error('not programming language'));
              // this.status = 'error'
            }else{
              observer.next(this.courses[i]);
            }
            
          }, 1000*i);
        }
    });

    custObs1.subscribe(res=>{
      // console.log(JSON.stringify(res));
      this._utility.appendElementToListElement(res,'elContainer1')
    },
    (eror)=>{
      this.status = 'error'
    },
    ()=>{
      this.status = 'completed'
    });

  }

}
