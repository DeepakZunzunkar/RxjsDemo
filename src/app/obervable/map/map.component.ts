import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilityService } from 'src/app/app.services/utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

   courses =[
    { id:101, name: 'Angular'},
    { id:102, name: 'JavaScript'},
    { id:103, name: 'Java'},
    { id:106, name: 'HTMl/CSS'},
    { id:104, name: 'Paython'},
    { id:105, name: 'Node JS'}

  ]

  constructor(private _utility: UtilityService) { }

  msg1;
  msg2;
  msg3;

  sub1:Subscription;
  sub2:Subscription;
  sub3:Subscription;

  ngOnInit(): void {

    //Ex:01

      let broadcastmsg = interval(1000);

      this.sub1 = broadcastmsg.pipe(
        map(brdMsg=> brdMsg+' second ')
      )
      .subscribe(res=>{
        this.msg1 = res;

      });

      setTimeout(() => {
        this.sub1.unsubscribe();
      }, 10000);

    //  Ex:02
    this.sub2 = broadcastmsg.pipe(
      map(brdMsg=> brdMsg + 10)
    )
    .subscribe(res=>{
      this.msg2 = res;

    });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

     //  Ex:03
     let courseList = from(this.courses);
    courseList.pipe(
      map(data => data.name)
    ).subscribe(res=>{
      this._utility.appendElementToListElement(res, 'elContainer')
    });

  }

}
