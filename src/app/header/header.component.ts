import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('promiseBtn')
  promiseBtn: ElementRef;

  @ViewChild('obsBtn')
  obsBtn: ElementRef;

  status;

  constructor() { }


  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    fromEvent(this.promiseBtn.nativeElement, 'click').subscribe(res => {
      this.status = 'promise';
    });

    fromEvent(this.obsBtn.nativeElement, 'click').subscribe(res => {
      this.status = 'observable';
    })

  }
  
}
