# AirlinesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

The application uses PrimeNG for UI components (more about PrimeNG here: https://primefaces.org/primeng/showcase/#/)

## Application 

The application consists of two main parts - airline overview, which users can see on load, and airline detail, which shows upon clicking the magnifying glass next to an airline in the table. 

Table supports an option to mark an airline as favorite and also a filtering mode, which shows only favorite airlines. The persistence of the list of favorites is accomplished by localStorage.

The overview component is lazy-loaded.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
