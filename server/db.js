// Error check
let cachedDb = null;

    // Connects to the DB with a try&catch
async function connectMongo() {
    if (cachedDb) {
      return cachedDb;
    }
    try {
        const uri = 'mongodb+srv://doadmin:******@maindb-mongodb-af7c308c.mongo.ondigitalocean.com/?authSource=admin&replicaSet=maindb-mongodb&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
        const client = await mongodb.connect(
            process.env.DATABASE_URL, {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                // tls: true,
                tlsCAFile: './ca-certificate.crt1'
            }
        );
        const db = client.db('userinfo.crudtest');

        createTest(user, {
            name: "Test Man",
            summary: "A test worthy of a tester",
            email: "test231@test.com"
        })

        cachedDb = db;
        return db;
    } catch(err) {
        console.log(err);
        throw(err);
    }
  }

async function createTest(user, newTest){
    const result = await user.db("userinfo").collection("crudtest").insertOne(newTest);
    console.log(`New test created with the following id: ${result.insertedId}`);
}


