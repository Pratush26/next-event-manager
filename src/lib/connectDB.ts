import { Db, MongoClient } from "mongodb";
import clientPromise from "./MongoClient";

export async function mongoConnect(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  const client = await clientPromise;
  const db = client.db("next-event");
  return { client, db };
}