
# Eat-Da-Burger 
Is a restaurant app that lets users input the names of burgers they'd like to eat then stores them in a database for later consumption.


## Demo
```
Live Site: https://hidden-beyond-46898.herokuapp.com/
```
## Built With
Node.js
mySQL
Express
Handlebars
### Prerequisites
What things you need to install the software and how to install them

```
Node.js
mySQL

```
### Installing
To run the application locally, first clone this repository with the following command.
```
git clone https://github.com/YashuaB/Eat-Da-Burger
```
Next, install the application dependencies.

```
cd Eat-Da-Burger
npm install
```
Finally, run the node server locally.

```
node ./server.js
```
Now, open the local application on port 3000 at the URL: http://localhost:3000/.

Congrats! The app is now ready to use!

How does it work?
Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
Your app will store every burger in a database, whether devoured or not.