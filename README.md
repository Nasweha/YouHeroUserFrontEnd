# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




yourHero
-----------
yourHero is a Superhero Grievance Website where users can log their grievances, and superheroes can manage and resolve these issues. The platform is visually engaging, with storytelling elements, responsive design, and a dynamic user interface. The project is divided into two separate web applications:

1) User Application: Allows users to log grievances.
2) Superhero Dashboard: Enables superheroes to manage and resolve grievances.


Frontend (React):
----------------------
React.js: JavaScript library for building user interfaces.
react-router-dom: For handling page navigation.
react-toastify: For displaying notifications (toasts) when grievances are logged or resolved.
axios: For making HTTP requests to the backend API.

Backend (Node.js/Express):
---------------------------
Express.js: Node.js framework for building the RESTful API.
Mongoose: For interacting with MongoDB, storing user grievances and superhero actions.
nodemailer: For sending email notifications to users.

Development Tools:
--------------------
json-server: To simulate a RESTful API for local development.
dotenv: For environment variables management.



 a) yourHero Frontend 
---------------------

The yourHero frontend application is a React-based web application designed to provide a platform for users to submit grievances and for superheroes to manage them. It features a responsive design with animations and various interactive components.

Code Structure
------------------
Home.jsx
---------
The Home component serves as the main entry point for the home page, rendering several key sections:

HeroSection - Displays a prominent hero section.
HomeSec2 - Provides the "About Us" information.
HomeSec3 - Explains the "How It Works" process.
Chatbot - Integrates a chatbot for user interaction.
HeroSection.jsx
The HeroSection component features a hero banner with a call-to-action button:

Structure:

Includes a heading, description, and a call-to-action button.
Displays a superhero image and a background shape.
Libraries Used:
react-router-dom for navigation links.

HomeSec2.jsx
The HomeSec2 component provides information about the platform:

Structure:

Contains an image and a description of the platform’s mission.
Includes a button linking to more detailed information.
Libraries Used:
react-router-dom for navigation links.

HomeSec3.jsx
The HomeSec3 component explains the process of how the platform works:

Structure:

Includes visual steps with images and descriptive text.
Utilizes animations for visual effects.
Libraries Used:

aos (Animate On Scroll) for animations.
aos/dist/aos.css for CSS animations.

Chatbot.jsx
The Chatbot component integrates a chatbot:

Structure:

A button to open the chatbot modal.
A modal containing an embedded chatbot iframe.
Libraries Used:
react-modal for the modal functionality.

About.jsx
-----------------
The About component features a carousel from react-bootstrap that cycles through slides with information about the superhero and their mission.
Libraries Used:
react-bootstrap for the carousel component.
animate.css for animations.

Cform.jsx
---------------
The Cform component provides a form for users to submit grievances. It uses React's useState for form state management and react-toastify for toast notifications.

Libraries Used:
react-toastify for displaying notifications.
axios (through addFormApi function) for making HTTP requests.


Navbar1.jsx
---------------
The Navbar1 component includes a responsive navigation bar using react-bootstrap. It provides links to various sections of the application.

Libraries Used:
react-bootstrap for the navigation bar.
react-router-dom for navigation.

Footer.jsx
---------------
The Footer component includes quick links and social media icons.

Libraries Used:
@fortawesome/react-fontawesome for social media icons.


External Libraries Used
---------------------------
react - Core library for building the user interface.
react-router-dom - For handling navigation and routing.
aos - For scroll animations.
react-modal - For modal dialogs.



b) user Backend 
-----------------

 The setup and structure of the backend server for the Superhero Grievance Website. The backend is built using Node.js and Express and includes features for user registration, login, grievance submission, and email notifications.

1. Project Setup
----------------------
Dependencies:-

The backend server relies on the following external libraries:

express: Web framework for Node.js.
cors: Middleware for enabling Cross-Origin Resource Sharing.
dotenv: Module to load environment variables from a .env file.
jsonwebtoken: For creating and verifying JSON Web Tokens.
mongoose: MongoDB object modeling tool.
nodemailer: For sending emails.
googleapis: Google APIs client library for Node.js.



index.js
-----------
The Server.js file sets up and runs the backend server for handling grievances.

Structure:
Server Setup:

Imports necessary modules including express, cors, and dotenv.
Creates and configures the Express server.
Middleware:

Applies middleware for CORS and JSON parsing.
Routes incoming requests using the imported router.
Port Configuration:

Defines the port on which the server will listen.
Server Initialization:

Starts the server and logs a message indicating successful startup.
Libraries Used:
dotenv: Manages environment variables.
express: Framework for building the server.
cors: Middleware for handling Cross-Origin Resource Sharing.
router: Custom routes for handling various endpoints.


router.js
--------------
The router.js file defines the routes and their associated controllers for handling user and grievance operations.

Structure:
Route Definitions:

POST /register: Handles user registration.
POST /login: Handles user login.
POST /addform: Handles adding a grievance, protected by JWT middleware.
Controllers:

Imports and uses userController and formController to handle the logic for each route.
Middleware:

Uses jwtmiddleware for token verification on protected routes.
Libraries Used:
express: Framework for creating the router and defining routes.
userController: Controller for user-related operations.
formController: Controller for grievance-related operations.
jwtmiddleware: Middleware for JWT token verification.

formController.js
----------------------
The formController.js file handles the logic for adding grievances.

Structure:
Add Grievance:

Function: addForm
Purpose: Creates and saves a new grievance entry in the database, then sends an email notification.
Dependencies:

Imports Grievance model for database operations.
Uses sendGrievanceEmail for sending email notifications.
Libraries Used:
mongoose: ORM for MongoDB, used to interact with the Grievance model.
sendGrievanceEmail: Service for sending email notifications via Gmail API.


userController.js
-----------------
The userController.js file manages user-related operations such as registration and login.

Structure:
Register User:

Function: registerController
Purpose: Registers a new user and saves their details in the database if they don't already exist.
Login User:

Function: loginController
Purpose: Authenticates users and returns a JWT token upon successful login.
Libraries Used:
mongoose: ORM for MongoDB, used to interact with the users model.
jsonwebtoken: Used to generate and verify JWT tokens.


jwtMiddleware.js
----------------------
The jwtMiddleware.js file provides middleware for verifying JWT tokens.

Structure:
Token Verification:

Function: jwtmiddleware
Purpose: Verifies the JWT token provided in the Authorization header and attaches the user ID to the request.
Error Handling:

Responds with an authorization error if token verification fails.
Libraries Used:
jsonwebtoken: Used to verify the JWT token.


sendEmail.js
----------------
The sendEmail.js file handles sending email notifications using Gmail API.

Structure:
Setup:

Configures Gmail API client with OAuth2 credentials and tokens.
Send Email:

Function: sendGrievanceEmail
Purpose: Constructs and sends an email with the grievance details.
Libraries Used:
googleapis: Used to interact with the Gmail API.
fs: For reading credentials and token files.
path: For managing file paths.


getRefreshToken.js
----------------------
The oauth2Callback.js file handles OAuth2 authorization for Gmail API.

Structure:
Authorization URL:

Generates and logs an authorization URL for the user to visit.
Token Storage:

Function: Stores the OAuth2 token after user authorization.
Libraries Used:
googleapis: Used to generate authorization URL and handle token exchange.
fs: For storing the token in a file.
readline: For reading user input from the command line.
