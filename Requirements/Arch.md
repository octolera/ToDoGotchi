# Architecture
## Criteria
- Application type
- Deployment
- QM
- Tech stack
- E2E fucntional
- Model
- AS IS
  
## Application type
ToDoGotchi is a mobile apllication, see detailed description in [SRS](https://github.com/octolera/ToDoGotchi/blob/main/Requirements/SRS.md)

## Deployment
Application will be deployed locally on end user's Android device. 
The content of application: 
- minimal Ionic WebView runtime
- React application
- Assets

## QM
Visual consistancy and Appropriate UX will be used as qualtity metrics. For additional details see [3.2 of SRS](https://github.com/octolera/ToDoGotchi/blob/main/Requirements/SRS.md#32-quality-requirementsnon-functional)

## Tech Stack
Ionic  - open source cross-platform mobile UI toolkit based on WebView.

React - JS library  for UI creation.

The most important factors are support for video playback and localstorage (IndexedDB).

## E2E functional

To store application data on presentation level React states will be used.
To store permanent user data IndexedDB. IndexedDB will be stored in mobile app cache.

## Model
See [components diagram](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/description/README.md#components)

## AS IS

