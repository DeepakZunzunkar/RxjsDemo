# RxjsDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Promise

  1. it is not part of angular or rxjs , its javascript part.
  2. is is used in asynchronous programming , it is only async.
  3. returns single value.

    - resolve (Yes)
    - reject (No)

  4. definate and indefinate 
        - means when we call service we will get specfic data or may be not i.e resolve or reject .

  5. then / catch / finally .

    -   then 
      > if promise resolve then what to do next 
    -   catch 
      > if promise fail then what to do next 


> Note : execute the code line by line and when asych call occurs ,execute that code in background and execute remaining code line by line of  same page 	



## Obervable 

1. it can be async or sync
2. return stream of value  

observable is a stream of data and it emits data time to time
observable work on data stream
to use observable we need to subscribe it 
code which is writen to subscribe is a observer 

###### observable stream

: it can be created by 
-   user inputs (Button click event)
-    HTTP request 
-    Array 
-    Objects ...

###### Observable Handles (subscribe)
-   Data
-   Error 
-   Completion

```
Ex:  .subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log(completion),
)

```

###### From Event 
-   fromEvent(targetElement,eventName) function of rxjs takes two argument targetElement i.e native element value of ElementRef and second one is event type i.e click...
on subscribe it return stream of event data i.e observable 

###### Interval 
-  using it we can create stream of data . it take one argument which is time in `ms` . it continue to create stream of data until specified time fineshed. it can be stop creating stream of data, once subscription completed or unsubscribe that subscription .

###### Timer
-   it's a rxJs operator ,it work same like interval .Timer(dueTime:number,) it take two argument first one is dueTime i.e time after it will start and second one is interval 












