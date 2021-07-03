import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  appendElementToListElement(value, containerID){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById(containerID).appendChild(el);
  }

}
