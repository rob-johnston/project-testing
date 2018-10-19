const MongoClient = require('mongodb').MongoClient;
const url = require('url');

const config = 'mongodb://mongo:27017/mobilab_project'
const dbName = url.parse(config).path.substring(1);

const accounts = [
  {
    balance: 1000,
    currency: 'eur',
    name: 'john doe'
  },
  {
    balance: 2000,
    currency: 'eur',
    name: 'max mustermann'
  },
  {
    balance: 3000,
    currency: 'usd',
    name: 'John McClane'
  }
];


(async function() {
  let client;

  try {
    client = await MongoClient.connect(config);
    const db = client.db(dbName);
    await db.dropDatabase();

    const collection = await db.collection('accounts').insertMany(accounts)
    console.log('init DB dat has been added');

  } catch (e) {
    console.log(e);
  }
  client.close()
})();
