import {
    Bson,
    MongoClient,
  } from "https://deno.land/x/mongo@v0.31.1/mod.ts"; 

  const client = new MongoClient();

// Connecting to a Local Database
await client.connect("mongodb://127.0.0.1:27017"); 

const db = client.database("deno"); 

export default db;