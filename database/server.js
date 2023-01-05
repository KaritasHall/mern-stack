//requiering express and initializing the app:
const app = require("express")();
//requiering the cors middleware:
const cors = require("cors");

const PORT = 5001;

// Connecting to MongoDB database
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://KaritasWH:fOgNmSUn5EZYi79j@cluster0.lobzkpk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

//telling express to use the cors middleware
app.use(cors());

// I have two collections: fruits and vegetables that I am fetching
app.get("/fruits", (req, res) => {
  const connect = async () => {
    const connection = await client.connect();
    const collection = connection.db("Test").collection("Fruits");
    const data = await collection.find().toArray();
    res.send(JSON.stringify(data));
  };

  connect();
});

app.get("/vegetables", (req, res) => {
  const connect = async () => {
    const connection = await client.connect();
    const collection = connection.db("Test").collection("Vegetables");
    const data = await collection.find().toArray();
    res.send(JSON.stringify(data));
  };

  connect();
});

app.listen(PORT, () => {
  console.log("listening to port: " + PORT);
});
