import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { UtilityService } from 'src/app/app.services/utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private _utility: UtilityService) { }

  obsMsg;
  videoSubscription: Subscription;

  ngOnInit(): void {

    //it immediatly start to create stream of data 
    const broadCastVideo = interval(2000);

    //timer(delay,interval)
    // dealy (5000) - after 5 second it will start to create stream of data 
    // const broadCastVideo = timer(5000,1000);

    this.videoSubscription = broadCastVideo.subscribe(res => {
      // console.log(res)
      this.obsMsg = res;
      // if(res >= 5){
      //   this.videoSubscription.unsubscribe();
      // }

      let video = "video " + res
      this._utility.appendElementToListElement(video, 'elContainer1');
      this._utility.appendElementToListElement(video, 'elContainer2');
      this._utility.appendElementToListElement(video, 'elContainer3');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }

    })

  }


}
