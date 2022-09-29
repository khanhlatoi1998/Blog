import { MongoClient, ServerApiVersion } from 'mongodb';

const url = 'mongodb+srv://khanhlatoi1998:01653325843@cluster0.hmjshte.mongodb.net/?retryWrites=true&w=majority'
const dbName = 'Blog';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
await client.connect();
const db = client.db(dbName);

export default db;