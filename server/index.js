const { MongoClient } = require("mongodb");
const assert = require('assert');

// Connection URI
const uri = ""

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    const db = client.db("userinfo");
    db.collection("email-user-pass").insertOne({
      email:"",
      username:"",
      password:""
    })
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);
