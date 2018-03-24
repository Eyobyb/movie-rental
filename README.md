# movie-rental
I used a microservice architecture so you have to run all the three servers at the same time ..
To start the server you should run nodemon www for all the three servers on the Movie-rental/connect/bin/ , Movie-rental/RentMovie/bin/, Movie-rental/ListMovie/bin/ directory's    
The starter server "connect" will render the view on the localhost:3000 .. 
-- And you have to install the packages from all the servers  using npm install 
-- It works with out mongo but if you like to use the mongo database just uncomment the commented parts from the Movie-rental/movielist and Movie-rental/rentMovies server api/adder.js file .
-- There are three services the rented movie list maker and the movie list maker and the render which will combine the two service together and present for the user as it if a single server response .
