# ToDo List App
 - Used a Started Kit from one of the courses I am following

# App Requirements
- Adding a task - Title, Description, Hours
	- Task can only up to 8 hours considering that in Progress you cannot have more than 8 hours
	- Only 24 hours of tasks can be included in the Todo
- Edit a Task - only when in Todo once in progress cannot be touched
- Deleting a Task - A task can only be deleted when it is in TODO
- Move a task to Progress - only from TO do list
	- Moving a task in progress won't detuct the hours of the TODO list as the task can be moved back to TO DO
- Move task to done only from progress
- Persistance Storage

# Assumptions
 - user has npm installed

# Installing 
	- npm install
	- npm start
	- Go to localhost

# How to Use
	- Enter details requested on the New Task Section and press Adding
	- To move the task to progress click START
	- To move the task to finish click FINISH
	- To Delete a task make sure task is in to do list and click (X) next to the title
	- To Edit Task make sure task is in to do list and click EDIT
	- To move task back to do click TODO
	- Persistance is saved everytime the state changes and will get the latest as long as you use the same browser window and not clear your local storage

# Technologies Used
	webpack 1.0 -> due to this I had to use some earlier packages in the npm
	Webpack server
	React
	Redux
	Redux-Form
	Sass
	Post CSS -> autoprefixer
	Babel

# Desicions
	- App was build in react/redux a framework that I'm currently learning, so I thought it would be intersting to try it out on this application. 
	- I focused mainly on writing understanable, re-usable components keeping them simple and extracting into another compontent where it got too complicated
	- Placed File structure:
		- src 
			- actions
			- components
			- containers
			- reducers
		- style
			- components
		- test

	- compontents folder contains sections of the app 
	- container folders contains the sections that will contain the compontents of the app ( like pages)
	- used sass for advantages like mixins, function and variables
	- Css was not included alongside the components as it's quite a simple app and not a lot of css currently
	- Post Css autoprefixer helps with writing prefixes and keeping css clean
	- Kept all the reducers in one file, although the message reducer can be taken out and have the reducers sectioned
	- Used Webpack 1.0 - not that famliar with webpack 2 so for the sake of finishing the application decided to go with the 1

# Further Improvements
 	Unit Testing
 	Drag and Drop of Tasks
 	Better UI when it comes to Mobile (closing coloumns)
 	Upgrade to Webpack 2
 	Linting of the JS and CSS files
 	Used ImmutableJS for the reducer
