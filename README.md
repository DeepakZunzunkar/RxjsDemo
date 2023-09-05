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

[Rxjs Officaila site](https://www.learnrxjs.io/)
[DOCS ](https://rxjs.dev/api/index/)
[marble daigram Explaination](https://rxmarbles.com/)

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

> An observable represents a sequence of values which can be observed

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
-  using it we can create stream of data . it take one argument which is time in `ms` . it continue to create stream of data until specified time fineshed. it can be stop once subscription is completed or unsubscribe that subscription .

###### Timer
-   it's a rxJs operator ,it work same like interval .Timer(dueTime:number,interval) it take two argument first one is dueTime i.e time after it will start and second one is interval i.e duration for which its creating stream of data .


###### of() & from()  operator
- `of()` operator Converts the arguments to an observable sequence. And `from()` operator Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.

###### toArray()  operator
- Collects all source emissions and emits them as an array when the source completes.
operator transform data into desire output and transformation of data should be done before we get means before subscribe
- using toArray we convert data into array.

##### pipe
- there was no concept of pipe in RxJs previous version , in latest version there is pipe concept
  which is used to convert or transform data and there are some operator which use pipe called them as pipable operator.
- before subscribing we can transform data using toArrya in pipe.
- we can have operator chaining in pipe .seprate it by comma(,)
  
###### custom observable operator
- to create custom observable there is create method  which takes argument as annonymous function like ES6 arrow function and emmit data by using next,error and complete method of it accordingly .

###### map operator
- it is used to transform data according to our needs ,after transformation it completely return new observable means it take one observable and converts it into another observable .

###### pluck operator
- it is used to get particular property from our data means it get property value of our data .






















