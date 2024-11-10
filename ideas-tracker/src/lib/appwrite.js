import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fba87f001f6aa95d6f"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
