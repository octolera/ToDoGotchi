# Requirements Document

## 1 Introduction

ToDoGotchi is a mobile task tracker with virtual pet that is striving from user task completion rate. Application is used to place tasks in schedule, view schedule for current/upcoming day, revise completion rate of former tasks and mark tasks for present day as completed. Task completion rate and completion persistence are affecting virtual pet's health and mood stats.

## 2 User Requirements

### 2.1 System interfaces

- Target OS: Android 5.1+ with Chromium 79+;
- Tech stack: JavaScript, Ionic, React.js;
- Additional development tools: git, node.js, npm.

### 2.2 User interface

On the first launch application provides an invitation for user to enter their username

After getting username, application enters its main gameplay loop, in which it provides personal virtual pet that could be named on the user's premise

pet screen

To-do checkup for the present day and tasks for the upcoming days may be viewed through the "tasks" button. Tab is always opened to show current day first, arrows on the top or side swipe are used to switch to the day before/ahead. To-Do marks for the past days are locked and remain only for revision and user's self-reflection.

Schedule editor is opened with the "Edit" button.

Editor allows adding new tasks for upcoming days. Tasks may be one-time and permanent - repeating on the given week days.

task creation tab

The better the performance, the better the pet's mood and health

...and vice versa. Severe neglidgence may result in pet's death

### 2.3 Users Characteristics

ToDoGotchi is simple app suitable for users within wide demographic range, not limited by technical knowledge. The application is predominately targeting people who need help learning time management and keeping their schedule consistent, but also could act just as a fun alternative to default to-do applications. Virtual pet aspect may present as an additional motivational factor for people struggling with procrastination or a friendly way of explaining time management concepts to children.

The retro-game stylised look may attract those who feel nostalgic for 16-bit era aestetics but prefer them involved as simple and helpful everyday utilities

### 2.4 Assumptions and Dependencies

This application will be based around user local storage. All user data after reinstallation may be lost.

## 3 System requirements

### 3.1 Functional requirements

- Store user's schedule
- Form task completion statistics
- Provide schedule editing tools
- Display pet state according to users success rate

### 3.2 Quality requirements(Non-functional)

Reliability certainly is the ground aspect for ToDoGothi. No matter what happened, schedules must stay consistent and be available in any time at the user's request.
Acessability comes next to reliability. The UI must provide easy-to-master navigation without being messy and overcomplicated
