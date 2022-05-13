require('dotenv').config()

// DB Connection URI, both local and dev
//const uri = process.env.DB_URL
const uri = process.env.DB_URL || "mongodb://localhost:27017";

// Create a new MongoClient
const { MongoClient, Db } = require("mongodb");
const client = new MongoClient(uri);
client.connect()
      .then((client) =>
        {console.log("Connected to database client.")})
      .catch((err) =>
        {console.log("Unable to start database client.\n" + err)});
const charTable = new Db(client, "GFTTT").collection("characters");
const profileTable = new Db(client, "GFTTT").collection("profileInfo");
//Create a new mongoose connection to specific database for mongoose models
// const database = "/GFTTT"
// const mongooseURI = uri + database
// const mongoose = require("mongoose");
// mongoose.connect(mongooseURI)
// .then(() => {
//   console.log("mongoose connection successful")
// })
// .catch(err => {
//   console.error("connection error")
// })

//Importing Mongoose Models
const characterModel = require('./models/Character');
const classModel = require('./models/Class');

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
  res.json({ message: "Hello from server!!" });
});

app.post('/api/saveProfile', cors(), (req, res)=>{
  profileTable.updateOne({userID:req.body.userID},{$set: req.body},
    {upsert:true}, (err, ok) => {
      if(err) {console.log("Unable to save profile.\n"+req.body+err);
        res.sendStatus(500);}
      else {console.log("Saved profile for " + req.body.userID);
        res.sendStatus(200);}
    });
})

app.get('/api/getProfile/:userID', cors(), (req,res)=>{
  profileTable.find({userID: req.params.userID}).toArray(
    (err, data) => {
      if(err) {console.log("Unable to get profile."+err);
        res.sendStatus(500);}
      else {
        console.log("Profile data requested for "+req.params.userID);
        res.json(data);
      }
    }
  );
})

app.post('/api/deleteCharacter', cors(), (req, res)=>{
  charTable.deleteOne(req.body,
                   (err, data) => {
                     if(err) {console.log(err);
                        res.sendStatus(500);}
                     else if (data.deletedCount > 0){
                       console.log("Deleted character.");
                     } else {
                       console.log("Character not found for deletion.")
                     }
                   }
                  );
  }
)

app.post('/api/saveCharacter', cors(), (req, res)=>{
  charTable.countDocuments({userID: req.body.userID,
                  characterName: req.body.characterName,
                  className: req.body.className,
                  level: req.body.level,
                  race: req.body.race},
                (err, res)=> {
                  if(err) {console.log(err); res.sendStatus(500);}
                  else if (res > 0) {console.log("Duplicate, skipping.");}
                  else {
                    charTable.insertOne(req.body);
                    console.log("Character saved.")
                  }
          })
  }
)

app.get('/api/getCharacter/:userID', cors(), (req,res)=>{
  charTable.find({userID: req.params.userID}).toArray(
    (err, data) => {
      if(err) {console.log(err); res.sendStatus(500);}
      else {
        console.log("Character list requested for "+req.params.userID);
        res.json(data);
      }
    }
  );
})

app.get('/api/compendium/retrive-all', cors(), (req, res)=>{
  //API to READ all characters from DB.
  characterModel.find(function(err, data) {
    if(err){
      console.log(err);
    }
    else{
      res.json(data);
    }
  });
});

app.post('/api/buildCharacter-create', cors(), (req, res)=>{
  //API to CREATE character from character sheet
  const newCharacter = new characterModel()
  //sets character's info to data (if any) or set defaults if necessary
  newCharacter.characterName = req.body.characterName
  //newCharacter.charClass = req.body.charClass
  const newCharacterClass = new classModel()
  newCharacter.charClass = newCharacterClass
    newCharacterClass.className = req.body.charClass
    newCharacterClass.save()
  newCharacter.subclass = req.body.subclass
  newCharacter.level = req.body.level
  newCharacter.race = req.body.race
  newCharacter.subrace = req.body.subrace
  newCharacter.background = req.body.background
  newCharacter.alignment = req.body.alignment
  newCharacter.experience = req.body.experience
  newCharacter.playerName = req.body.playerName
  newCharacter.strength = req.body.strength
  newCharacter.dexterity = req.body.dexterity
  newCharacter.constitution = req.body.constitution
  newCharacter.intelligence = req.body.intelligence
  newCharacter.wisdom = req.body.wisdom
  newCharacter.charisma = req.body.charisma
  newCharacter.armorClass = req.body.armorClass
  newCharacter.initiative = req.body.initiative
  newCharacter.speed = req.body.speed
  newCharacter.acrobatics = req.body.acrobatics
  newCharacter.animalHandling = req.body.animalHandling
  newCharacter.arcana = req.body.arcana
  newCharacter.athletics = req.body.athletics
  newCharacter.deception = req.body.deception
  newCharacter.history = req.body.history
  newCharacter.insight = req.body.insight
  newCharacter.intimidation = req.body.intimidation
  newCharacter.investigation = req.body.investigation
  newCharacter.medicine = req.body.medicine
  newCharacter.nature = req.body.nature
  newCharacter.perception = req.body.perception
  newCharacter.performance = req.body.performance
  newCharacter.persuasion = req.body.persuasion
  newCharacter.religion = req.body.religion
  newCharacter.sleightOfHand = req.body.sleightOfHand
  newCharacter.stealth = req.body.stealth
  newCharacter.survival = req.body.survival
  newCharacter.spell = req.body.spell
  newCharacter.maxHitPoints = req.body.maxHitPoints
  newCharacter.strThrow = req.body.strThrow
  newCharacter.dexThrow = req.body.dexThrow
  newCharacter.conThrow = req.body.conThrow
  newCharacter.intThrow = req.body.intThrow
  newCharacter.wisThrow = req.body.wisThrow
  newCharacter.chaThrow = req.body.chaThrow
  newCharacter.darkVision = req.body.darkVision
  newCharacter.equipment = req.body.equipment
  newCharacter.personalityTraits = req.body.personalityTraits
  newCharacter.ideals = req.body.ideals
  newCharacter.bonds = req.body.bonds
  newCharacter.flaws = req.body.flaws
  newCharacter.featsTraits = req.body.featsTraits

  newCharacter.save(function(err,data) {
    if(err){
      console.log(err);
    }
    else{
      res.send("character created.");
    }
  });
});

app.post('/api/class-update', cors(), (req, res)=>{
  _id = req.body._id
  if (_id === undefined){
    //if character does not exist aka no id exists
    const newCharacter = new characterModel()
    const newClass = new classModel()
    newClass.className = req.body.charClass
    newClass.save()
    newCharacter.charClass = newClass
    newCharacter.save()
    res.send("Character Created");
  }
  else{
    characterModel.findById(_id, function (err,data){
      console.log(data.charClass)
      console.log(data.charClass[0])
      if(data.charClass[0] !== undefined){
        //character exists by id and class did too
        classModel.findByIdAndUpdate({_id: data.charClass}, {className: req.body.charClass}, {upsert:true}, function(err,data){
          if(err){
            console.log(err);
          }
          else{
            res.json("Update successful.");
          }
        });
      }
      else{
        //character exists by id, but class did not
        const newClass = new classModel()
        newClass.className = req.body.charClass
        newClass.save()
        characterModel.findByIdAndUpdate({_id: req.body._id}, {charClass: newClass}, {upsert:true}, function(err,data){
          if(err){
            console.log(err);
          }
          else{
            res.json("Class created.");
          }
        })
      }
    })
  }
});

app.get('/api/class-get', cors(), (req, res)=>{
  //should be character ID
  _id = req.body._id
  characterModel.findById(_id, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      classModel.findById({_id: data.charClass}, function(err, data){
        if(err){
          console.log(err);
        }
        res.send(data.className)
      })
    }
  });
});

app.post('/api/race-update', cors(), (req, res)=>{
  if (req.body._id === undefined){
    //if character does not exist aka no id exists
    const newCharacter = new characterModel()
    newCharacter.race = req.body.race
    newCharacter.save()
    res.send(newCharacter);
  }
  else{
    characterModel.findByIdAndUpdate({_id: req.body._id}, {race: req.body.race}, {upsert:true}, function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    });
  }
});

app.get('/api/race-get', cors(), (req, res)=>{
  _id = req.body._id
  characterModel.findById(_id, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.json(data.raceName);
    }
  });
});

app.post('/api/feats-update', cors(), (req, res)=>{
  if (req.body._id === undefined){
    //if character does not exist aka no id exists
    const newCharacter = new characterModel()
    newCharacter.featsTraits = req.body.featsTraits
    newCharacter.save()
    res.send(newCharacter);
  }
  else{
    characterModel.findByIdAndUpdate({_id: req.body._id}, {featsTraits: req.body.featsTraits}, {upsert:true}, function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    });
  }
});

app.get('/api/feats-get', cors(), (req, res)=>{
  _id = req.body._id
  characterModel.findById(_id, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.json(data.featsTraits);
    }
  });
});

app.post('/api/subclass-update', cors(), (req, res)=>{
  if (req.body._id === undefined){
    //if character does not exist aka no id exists
    const newCharacter = new characterModel()
    newCharacter.subclass = req.body.subclass
    newCharacter.save()
    res.send(newCharacter);
  }
  else{
    characterModel.findByIdAndUpdate({_id: req.body._id}, {subclass: req.body.subclass}, {upsert:true}, function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    });
  }
});

app.get('/api/subclass-get', cors(), (req, res)=>{
  _id = req.body._id
  characterModel.findById(_id, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.json(data.subclass);
    }
  });
});

app.post('/api/subrace-update', cors(), (req, res)=>{
  if (req.body._id === undefined){
    //if character does not exist aka no id exists
    const newCharacter = new characterModel()
    newCharacter.subrace = req.body.subrace
    newCharacter.save()
    res.send(newCharacter);
  }
  else{
    characterModel.findByIdAndUpdate({_id: req.body._id}, {subrace: req.body.subrace}, {upsert:true}, function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    });
  }
});

app.get('/api/subrace-get', cors(), (req, res)=>{
  _id = req.body._id
  characterModel.findById(_id, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.json(data.subrace);
    }
  });
});

app.post('/api/equipment-update', cors(), (req, res)=>{
  if (req.body._id === undefined){
    //if character does not exist aka no id exists
    const newCharacter = new characterModel()
    newCharacter.equipment = req.body.equipment
    newCharacter.save()
    res.send(newCharacter);
  }
  else{
    characterModel.findByIdAndUpdate({_id: req.body._id}, {equipment: req.body.equipment}, {upsert:true}, function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    });
  }
});

app.get('/api/equipment-get', cors(), (req, res)=>{
  _id = req.body._id
  characterModel.findById(_id, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.json(data.equipment);
    }
  });
});

app.post('/api/spell-update', cors(), (req, res)=>{
  if (req.body._id === undefined){
    //if character does not exist aka no id exists
    const newCharacter = new characterModel()
    newCharacter.spell = req.body.spell
    newCharacter.save()
    res.send(newCharacter);
  }
  else{
    characterModel.findByIdAndUpdate({_id: req.body._id}, {spell: req.body.spell}, {upsert:true}, function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    });
  }
});

app.get('/api/spell-get', cors(), (req, res)=>{
  _id = req.body._id
  characterModel.findById(_id, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.json(data.spell);
    }
  });
});

app.post('/api/background-update', cors(), (req, res)=>{
  if (req.body._id === undefined){
    //if character does not exist aka no id exists
    const newCharacter = new characterModel()
    newCharacter.background = req.body.background
    newCharacter.save()
    res.send(newCharacter);
  }
  else{
    characterModel.findByIdAndUpdate({_id: req.body._id}, {background: req.body.background}, {upsert:true}, function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.json(data);
      }
    });
  }
});

app.get('/api/background-get', cors(), (req, res)=>{
  _id = req.body._id || "62412597f92eb7fcf574b137"
  characterModel.findById(_id, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.json(data.background);
    }
  });
});

app.get('/api/name-get', cors(), (req,res)=>{
  client.connect();
  const table = client
                .db("GFTTT")
                .collection("name")
})

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
