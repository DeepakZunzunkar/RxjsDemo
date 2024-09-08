import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  appendElementToListElement(value, containerID){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById(containerID).setAttribute("class","myclass");
    document.getElementById(containerID).appendChild(el);
    // document.getElementById(containerID).removeChild;
  }

  appendElement(value, containerID,element){
    let el = document.createElement(element);
    el.innerText = value;
    document.getElementById(containerID).appendChild(el);

    
  }

}
