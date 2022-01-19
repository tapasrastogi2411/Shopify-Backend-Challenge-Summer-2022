# Inventory Manager - Shopify Backend Challenge - Summer 2022

## Table of Contents
- Task and Goal of this challenge
- Features and functionalities completed
- Additional feature implemented
- Tools and Technologies used
- Setting up the Development environment
- Testing the features/functionalities
- Notes and Caveats

## Task and Goal of this Challenge

The goal of the challenge was to create a backend application solely for keeping track of a company's inventory. The user has to be able to perform basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations, which are:
- Create inventory items
- Edit Them
- Delete Them
- View a list of them

An additional feature was also needed to be implemented, which is discussed in the next section

## Features and functionalities completed
- This application has a fully functioning backend which is able to do all the required basic `CRUD` operations
- I have implemented a simple plain-vanilla front-end which the user can interact with to test/try out the `Create`, `Read`, and `Delete` functionalities. Though the `update` feature is not present on the front-end to view/test, IT IS FULLY FUNCTIONING ON THE BACKEND, which is the requirement

## Additional feature
The `additional feature` I chose to implement is the `Push a button export product data to a CSV` feature, which allows the user to export all the data/items currently in the inventory/database into a CSV file. This can be tried/tested either through clicking a link on the frontend, which automatically downloads the CSV file for the user

## Tools and Technologies Used
- Node, Express, Javascript, MongoDB (Backend)
- React (Frontend)
- Heroku (Deployment)
- Postman(Testing API endpoints)
- Windows Terminal :)

## Setting up the Local Development Environment
First, you need to install npm (Node package manager) and Node.js. Check if they are already installed by running:

	$ node -v
	$ npm -v

If Node.js is not installed, navigate to this website: https://nodejs.dev/learn/how-to-install-nodejs for installation instructions. Note that if you are using Mac OS and have homebrew installed as a package manager you can simply install Node.js by doing:

	$ brew install node

Installing Node.js automatically installs npm so you don't need to worry about installing it separately!

Now, to actually build the project first start by cloning  the repo and navigate to the top-level directory:

	$ git clone git@github.com:tapasrastogi2411/Shopify-Backend-Challenge-Summer-2022.git
	$ cd Shopify-Backend-Challenge-Summer-2022/

#### NOTE: At this point, we are reading to start our frontend and backend - But first we need to setup our MongoDB database. This requires a few extra steps, so please take note of the following points
- You HAVE to create a .env file inside the `backend` folder of your cloned repository. Create a new file in this folder and simply name it `.env`, with the following content: 

    `MONGO_URI="<mongo_URL>`
    
 where <mongo_uri> is your MongoDB Connection URL
	
To run the front-end do: 

	$ cd frontend
	$ npm install
	$ npm start

To run the back-end do:

	$ cd backend
	$ npm run devStart
  
You can now see the frontend running on http://localhost:3000/

## Testing the features/functionalities

- You have two ways of testing the backend endpoints(`CRUD`)and the `exportCSV` feature - through the local website(or deployed website) OR through Postman(recommended)
- Testing `Create`, `Read`, `Delete` and the `exportCSV` feature is recommended to be done through the frontend
- Testing the `update` feature is recommended to be done through Postman, since it is the only feature which isnt available on the frontend(BUT WORKS perfectly on the backend)
- Click the `Export(CSV)` button on the frontend to test out the `exportCSV` feature! :)

## Notes and Caveats
- `Update` feature isnt implemented on the Frontend, BUT WORD perfectly fine on the BACKEND, which is what matters
- To view the action of any operation on my frontend, you need to refresh the page

If you have reached this part, you are awesome and thank you for taking the time to go through my project :)
