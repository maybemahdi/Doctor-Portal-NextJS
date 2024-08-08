import { MongoClient, ServerApiVersion } from "mongodb";

let db;
let client;

export const connectDB = async () => {
  if (db) return db;

  const uri = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASS}@cluster0.nrdgddr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    if (!client) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
      await client.connect();
      console.log("Connected to MongoDB");
    }
    db = client.db("doctorsPortal");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
};

// Don't close the connection if using a serverless environment
