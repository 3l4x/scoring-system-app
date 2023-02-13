
# Scoring System

The Scoring System App is a web application that allows users to **evaluate** the various **aspects of given task**. The application is built using React and is highly customizable.

For demonstration purposes the **app also displays the input** (the skeleton of the form) **and the output** (the results of user evaluation) The results aren't being saved in a json file since github pages only allow you to host static applications. If you would like to save them I recommend editing the saveResults async function inside the ScoringSystem component.

View live demo [here.](https://3l4x.github.io/scoring-system-app/)

## Built with
- [ReactJS](https://reactjs.org)
- [Semantic UI CSS](https://github.com/Semantic-Org/Semantic-UI-CSS) - A CSS framework for styling user interfaces.
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) - React integration for Semantic UI CSS
- [Yup](https://github.com/jquense/yup) - Used for validating user input
- [React Highlight](https://github.com/conorhastings/react-highlight) - Highlighting code syntax of input/output + styling it
- [js-beautify](https://github.com/beautify-web/js-beautify) - Formatting input/output


![ A screenshot of Scoring System app in use](https://i.imgur.com/fYugzaS.png)
## Features
-   Add tasks and aspects with their description and requirements.
-   Specify if an aspect is **required** or not
-   Set different input types (**text, number, boolean, list**) 
-   Specify **maximum value** for a number type aspect
-   Specify values for a **list** aspect
-   **Validate** form inputs using Yup
-   Display the successfully validated vs non successful (for example: 0❌4✔️)
-   **Navigate** between tasks using **previous and next buttons**
-   Navigate between tasks using the **task header**
-   **Save** once input passes validation
- **Reset** current form state to previous save

## Getting started

 1. **Clone the repository**
	```bash
	git clone https://github.com/3l4x/scoring-system-app.git
	```

 2. **Install dependencies:**
	```bash
	npm install
	```

 3. **Start the development server**
	```bash
	npm start
	```
 4. You can find the ScoringUtil.js inside ```./src/utils/ScoringUtil.js``` where you can manually **edit the tasks, their aspects and their requirements** as mentioned in the features.

With this setup, the Scoring System app is ready to be used.