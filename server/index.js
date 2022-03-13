require('dotenv').config()

// DB Connection URI
const uri = process.env.DB_URL

// Create a new MongoClient
const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

// Setting up express server and api with cors endpoints
const bcrypt = require('bcryptjs');
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
      {username: username}
    ).then(user=>{
      if(!user){
        return res.status(404).json();
      }
      if(user){
        //if user exists, checks hashed password
        var hash = user.password;
        const isPassword = bcrypt.compareSync(password, hash); //returns true if password is correct
        if(!isPassword){
          return res.status(404).json();
        }
        if(isPassword){
          //user and password is correct
          var cursor = db.collection('email-user-pass').find({ 
            username: username
          });
          cursor.forEach(
            function iterateFunc(doc) {
              //console.log(doc);
              res.json(doc.username);
            }
          );
        }
      }
    });
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
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        db.collection('email-user-pass').updateOne(
          {
            $or: [ { email:email }, { username: username } ]
          },
          {
            $setOnInsert: {email: email, username: username, password: hash}
          },
          {upsert: true}
        )
        res.json();
      }
    })
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
