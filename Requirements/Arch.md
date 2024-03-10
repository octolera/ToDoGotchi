# Architecture
## 1 Criteria
- Application type
- Deployment
- QM
- Tech stack
- E2E fucntional
- Model
- AS IS
  
## 2 Application type
ToDoGotchi is a mobile apllication, see detailed description in [SRS](https://github.com/octolera/ToDoGotchi/blob/main/Requirements/SRS.md)

## 3 Deployment
Application will be deployed locally on end user's Android device. 
The content of application: 
- minimal Ionic WebView runtime
- React application
- Assets

## 4 QM
Visual consistancy and Appropriate UX will be used as qualtity metrics. For additional details see [3.2 of SRS](https://github.com/octolera/ToDoGotchi/blob/main/Requirements/SRS.md#32-quality-requirementsnon-functional)

## 5 Tech Stack
Ionic  - open source cross-platform mobile UI toolkit based on WebView.

React - JS library  for UI creation.

The most important factors are support for video playback and localstorage (IndexedDB).

## 6 E2E functional

To store application data on presentation level React states will be used.
To store permanent user data IndexedDB. IndexedDB will be stored in mobile app cache.

## 7 Model
See [components diagram](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/description/README.md#components)

## 8 AS IS
Architecture AS IS:

![asis](https://github.com/octolera/ToDoGotchi/blob/main/Requirements/assets/asis.png)

Red cross means that component currently not implemented. Yellow means partial implementation. Green means that framework implements this components under the hood. Blue means that part of framework logic is adjustable.

Conclusion: there is no need in architecture corretion


