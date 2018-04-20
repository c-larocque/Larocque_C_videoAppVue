# WATCHNOW Video Application

This video application is a new way to watch movies online, allowing parents to control what their kids can see and watch online.

### Installing

After cloning the master branch to your computer, navigate to the root folder through the terminal and run npm install. This will ensure the Video App's main functionality is working properly. To get the videos to work, place the zipped 'video' folder from FOL within the public folder. Make sure you are connected to the proper database in the config.js file, and have that same data in your phpmyadmin.

If you are working from a previous db_videoApp file, be sure to delete/drop all tables and import the updated ones found in the current db_videoApp in the database folder. 

```
npm install
```

## Running the tests

To make any changes using SASS, navigate to the root folder in terminal and run ``grunt watch``. This will active SASS and allow you to make any styling changes necessary.


## Deployment

To run this video app on your local browser, after completing the above installation steps, navigate to the project folder using terminal and run ``npm start``. With the server running, go to your preferred browser and type 'localhost:3000' to view the application. If the styling is not working properly, be sure to run ``grunt`` in the terminal.

## Built With

* Express-handlebars
* Vue
* Grunt


## Authors

* **Carolyn Larocque**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
