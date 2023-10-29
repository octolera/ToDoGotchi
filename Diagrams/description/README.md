# Diagrams
- [Glossary](#glossary)
- [Usecase](#usecase)
- [Activity](#activity)
- [Sequence](#sequence)
- [State](#state)
- [Class](#class)
- [Components](#components)

## Glossary
![Glossary](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/Glossary.jpg)
## Usecase
![Usecase](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/Usecase.png)
## Activity
### Schedule activity
![ScheduleActivity](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/ScheduleActivity.png)
### TaskList activity
![TaskListActivity](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/TaskListActivity.png)
### Flow of events
+ Enter a username
1. If the user is new to the applicatio app provides an invitation to enter the username
2. Form to enter the username name shows up
3. User enters its name in the form
4. After receiving a name, application shows an invitation to create a pet

+ create a pet
1. If the user is new to the application or the previous pet is dead app provides an invitation to create a new pet
2. Form to enter new pet's name shows up
3. User enters the name in the form
4. After receiving a name, application shows the main screen

+ Check pet's health
1. This flow starts if user has an alive pet
2. Pet's health status is shown on the main screen

+ Check the graveyard
1. This flow starts if user has at least one dead pet
2. User clicks the "Graveyard" button on the main screen
3. Graveyard screen opens up, listing every mistreated pet to the current moment and best statistics

+ Check task screen
1. This flow of events starts when user has an alive pet
2. The user clicks the "Tasks" button while being on the main screem
3. Task screen opens up

+ Check tasks deadline
1. This flow of events starts when user has an alive pet and is on task screen
2. User uses arrows to navigate to the selected day
3. Tasks dedlines for the selected day are listed
   
+ Mark a task as completed
+ 1. This flow of events starts when user has an alive pet and is on task screen
2. User uses arrows to navigate to current day
3. User presses the checkbox next to the task name
4. Task is registered as completed
   
+ Check failed tasks
1. This flow of events starts when user has an alive pet and is on task screen
2. User uses arrows to navigate to the selected day in the past
3. Failed tasks for the selected day are shown

+ Check the schedule
1. This flow of events starts when user has an alive pet
2. The user clicks the "Edit" button while being on the task screen
3. Schedule opens up
   
+ Create a task
1. This flow of events starts when user has an alive pet and is on schedule screen
2. User uses arrows to navigate to certain month
3. User clicks "+" button next to the date of choice
4. Task creation window opens up
5. User sets a name for new task
6. User sets a repetition option for new task if needed
7. User marks certain days, on which task must be repeated
8. User presses the "Add" button
9. Task is added
    
+ Remove a task
1. This flow of events starts when user has an alive pet and is on schedule screen
2. User uses arrows to navigate to certain month
3. User clicks on the task
4. Task description and deletion option show up
5. User clicks "delete" option
6. Delete confirmation shows up
7. User confirms the deletion
8. Task is deleted. Pet's health takes a minor negative effect

## Sequence
### Register screen sequence
![RegisterScreenSeq](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/RegisterScreenSeq.png)
### Calendar screen sequence
![CalendarScreenSeq](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/CalendarScreenSeq.png)
### GetPetStatus sequence
![GetPetStatusSeq](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/GetPetStatusSeq.png)
## State
### First launch GUI state
![CreatePetState](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/CreatePetState.png)
### GUI state 
![GUIStateDiagram](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/GUIStateDiagram.png)
## Class
![ClassDiagram](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/Class.png)
## Components
![Deploy](https://github.com/octolera/ToDoGotchi/blob/main/Diagrams/assets/Deploy.png)
