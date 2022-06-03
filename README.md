# MdnAngularTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0 and project


## Initial Setup

Run `npm install` to install all the dependencies

Check whether Angular CLI is installed properly by running `ng --version`

Make sure Android and iOS specific SDK is installed for corresponding application code generation

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Check for CapacitorJS CLI

Run `npx cap --version` it should return proper version of CapacitorJS installed


## Adding Platform
Run `npx cap add android` to work with android
Run `npx cap add ios` to work with ios

## Generate/Update Native Code with CapacitorJS

Run `npx cap sync`

## Run the code in Android / IOS emulator

Run `npx cap run`

## Generation of Native ackage like apk for android
No Build support from CapacitorJS
Follow the Android/iOS specific Native Build steps
For example, for Android open `android` folder in Android Studio and generate the apk by using gradle as in native develeopment.

## In case of issues while running `npx cap sync`

Please do remove `android` or iOS specific folder from the application folder and rerun the cammand `npx cap sync`
