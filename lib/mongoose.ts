import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
	throw new Error("MONGODB_URI is not defined");
}

interface MongooseCache {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
}

declare global {
	// eslint-disable-next-line no-var
	var mongoose: MongooseCache | undefined;
}

let cached = (globalThis as any).mongoose;

if (!cached) {
	cached = (globalThis as any).mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI, {
				dbName: "devacademy",
				serverSelectionTimeoutMS: 7000,
			})
			.then((result) => {
				if (process.env.NODE_ENV !== "production") {
					console.log("Connected to MongoDB");
				}
				return result;
			})
			.catch((error) => {
				console.error("Error connecting to MongoDB:", error);
				cached.promise = null;
				throw error;
			});
	}

	cached.conn = await cached.promise;

	return cached.conn;
};

export default dbConnect;
