Trying out the MERN stack!

In my database I have two collections (fruits, vegetables) with a few objects each. I used MongoDB to create and store that data.

In the server.js you can see... the server. There I am connecting to the MongoDB database to get my data. Then the data is stored locally on localhost:5001. The purpose of the server is to manage the data and make it accessible to other computers.

In the mern-app I am using React to fetch the data from the localhost: 5001, and then displaying it as a string. In the JSX I use map() to display all the objects in the collections.
