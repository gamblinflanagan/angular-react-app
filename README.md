# AngularReactApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Getting Started

In a terminal run the command `npm i -g @angular/cli` if there are permission erros run `sudo npm i -g @angular/cli` <br />
In a terminal run the command `npm install`

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --output-hashing none` to build the project. The build artifacts will be stored in the `dist/` directory. Copy and replace if needed the js files from the `dist/` directory to the `public/` directory.
If React is not built run `npm run build`

### Important
search for `app-root` in main.js file and change it to the name of your component in the app.module.ts file: `customElements.define('<your-component-name>', elem);`

## Run Prod Build

In the `public/` directory. run `serve`. to install run `npm install -g serve`.  Navigate to `http://localhost:5000/`.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Sources/Credit for `ReactComponent1` and `app` folders 

https://thalava.com/how-to-use-react-web-components-in-angular <br />
https://github.com/zackypick/react-in-angular <br />
https://www.youtube.com/watch?v=95VZBqWljsw <br />
https://github.com/techiediaries/angular-web-component-demo <br />
