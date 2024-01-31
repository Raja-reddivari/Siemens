# Siemens

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Steps to Run the code

1. Import the shared folder on the vscode.
2. Run `npm install` from src folder (As i have removed node_modules from the folder to reduce the size)
3. Run `ng serve`

If you get get issue related to node version please down grade the version :
if you already installed nvm then use below commands to install and use.
Install - `nvm install v(version_number)`
Use - `nvm use v(version_name)`
and then run `export NODE_OPTIONS=--openssl-legacy-provider` this will fix the node version issue.
