require('dotenv').config()

// Connection URI
const uri = process.env.DB_URL

// Create a new MongoClient
const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

// Setting up express server and api with cors endpoints
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//API Functions
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post('/api/login', cors(), (req, res)=>{
  const username = req.body.username
  const password = req.body.password
  client.connect((err, client) => {
    if (err) throw err
    const db = client.db('userinfo')
    db.collection('email-user-pass').findOne(
      {
        $and: [ { username: username }, { password: password } ]
      },
    ).then(user=>{
      if(user){
        //user exists
        var cursor = db.collection('email-user-pass').find({ 
          username: username,
          password: password
        });
        cursor.forEach(
          function iterateFunc(doc) {
            //console.log(doc);
            res.json(doc.username);
          }
        );
      }
      if(!user){
        return res.status(404).json();
      }
    })
  })
});

app.post('/api/register', cors(), (req, res)=>{
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  client.connect((err, client) => {
    if (err) throw err
    const db = client.db('userinfo')
    db.collection('email-user-pass').findOne(
      {
        $or: [ { email:email }, { username: username } ]
      },
    ).then(user=>{
      if(user){
        //user exists
        return res.status(422).json();
      }
      if(!user){
        res.json();
      }
    })
    db.collection('email-user-pass').updateOne(
      {
        $or: [ { email:email }, { username: username } ]
      },
      {
        $setOnInsert: {email: email, username: username, password: password}
      },
      {upsert: true}
    )
  })
})

//Put API functions above this
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

/*Code to test db connection & retrival with express
client.connect((err, client) => {
  if (err) throw err
  const db = client.db('userinfo')
  db.collection('email-user-pass').find().toArray((err, result) => {
    if (err) throw err
    console.log(result)
  })
})
*/
