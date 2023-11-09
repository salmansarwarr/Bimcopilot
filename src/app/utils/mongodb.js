import { MongoClient } from "mongodb";

//const uri = process.env.MONGO_URI;
const uri = "mongodb+srv://msalmansarwar:1ka2ka3ka4@cluster0.0iczgaa.mongodb.net/"

let cachedClient = null;

export async function connectToDatabase() {
    if (cachedClient) {
        return cachedClient.db("test");
    }

    const client = new MongoClient(uri);

    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    cachedClient = client;

    return client.db("test");
}


