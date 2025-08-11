// import clientPromise from "../../lib/mongodb";
import clientPromise from ''
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
    points: 5, // max 5 requests
    duration: 60, 
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST allowed" });
    }

    try {
        await rateLimiter.consume(req.socket.remoteAddress); // consume 1 point per request

    } catch (rejRes) {
        return res.status(429).json({ message: "Too many requests. Chill for a bit." });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("your-db-name");
        const collection = db.collection("contacts");

        await collection.insertOne({ name, email, message, createdAt: new Date() });

        return res.status(201).json({ message: "Message sent! Thanks for reaching out." });
    } catch (error) {
        console.error("DB error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
