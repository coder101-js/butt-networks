// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) throw new Error("Missing MONGODB_URI env var");

if (process.env.NODE_ENV === "development") {
    // In dev, use a global variable to prevent multiple connections
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In prod, just create a new client
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
