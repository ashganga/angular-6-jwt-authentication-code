# angular-6-node-jwt-project

#Technology stack:
Angular 6.0.6 , Webpack 4.8 , Bootstrap 4 

#Steps to run te project locally with Node JS running:
1. Please read README of node-jwt-authentication Project and follow the steps to run Node locally.
2. Install all required npm packages by running npm install from the command line in the project root folder (where the package.json is located).
3. Start the application by running npm start from same root location.

#Project Description:
This application autheticates the user with JWT. 
After successful authetication it fetches the Menu which is accessible for authorised user.
I have used Auth guards and intercepters to send the JWT token in header for API calls after authorisation.
Golbal Event manager is used to hide and show the menu bar using event emitters.
Models , Services and compoenets are used for various login , Menu and home page functionalities.
Tried putting comments wherever possile.

