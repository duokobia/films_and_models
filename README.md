# films_and_models

Films_and_models is a responsive reactJS web application that consumes APIs. It is designed primarily to display models and films fetched from different APIs. 


# What it does

This is a dynamic web application that display names and physical features of models. Titles of available films each model acted in are also displayed on a dedicated page. Response is gotten from APIs fetched using JavaScript. This application allows you to find out details about films and models when you click on any the 'details' button on each film or model row. The model names are also links that takes you to a page with details on the model. You can navigate to other pages as well by following the links underneath each card.

An improvement on this version of the application will accept names of models or title of films in a search bar, check to see if they are available in the database, and returns data if available. In a case where data cannot be found, a message is sent to inform the user of the request error.


# Frameworks and Libraries used

The following frameworks were used for faster development of the web application:

- ReactJs
- React-router-dom v6
- React-Bootstrap v5.2



# Challenges I faced

While implementing this web application, the major challenge I encountered was creating logics to fetch nested objects and arrays with multiple urls and certain constraints asynchronously.  Challenging but interesting as I had opportunities to utilize some of my learnings on JavaScript.


# How to install and run the web application locally on your machine

To run the app locally, please follow the steps below:

1. Git clone the repository on your terminal:
  git clone https://github.com/duokobia/films_and_models.git
  
2. cd films_and_models

3. Then cd films_and_models again (Apologies on my folder naming style)

4. npm install

5. npm start

That is it! The application should run on your local server on http://localhost:3000.



# How to use the web application

From the landing page, click on any of the tabs in the navigation bar to go to their respective pages. Each page contains either a table or card with heading giving information about the page's content. For example, clicking on the 'Models' tab takes you to a new page with heading "Models and their details". Clicking on each details button re-route you to a page that displays the model's details in a card. You can click on the links to find out more as described by each link.

You can switch to any page desired at anytime using the navigation tab.  


# Credits

This web application was solely implemented by me following the XXXX XXX XXXXX requirements. Background image was gotten from upslash website and attribution was done in the app's html and css page it was used. I drew inspiration from a couple of resources which includes:

websites:
- https://unsplash.com/
- https://www.netflix.com/ng/
- https://www.tesla.com/
- https://businessnamegenerator.com/project-name-generator/

bloggers:
- https://www.javascripttutorial.net/javascript-fetch-api/
- https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/

vbloggers:
- Youtube resources.



