import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityService } from 'src/app/app.services/utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn')
  addBtn: ElementRef;

  constructor(private _utility:UtilityService) { }

  ngOnInit(): void {

    //whenever we are using rootchild element then we have to use nativeElement property to access that element value
    //here we are accessing DOM element i.e this.addBtn.nativeElement 
    //but ngOninit execute before DOM rendering completion so we will get error if we use here ,
    //we have to use this in  ngAfterViewinit life cycle hooks 
    //ngAfterViewinit execute when complete page is render and this button element will be available on page then only we can access button element. 

    /* fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      
    }); */

  }
  ngAfterViewInit(): void {
    
    let count = 1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
        // console.log(res);
        let countVal = "item "+count++;
        // console.log(countVal);
        this._utility.appendElementToListElement(countVal,'elContainer1');
    });

  }

}
