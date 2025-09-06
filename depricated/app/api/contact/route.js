import clientPromise from '../../lib/mongo.js';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
    points: 5,
    duration: 60,
});

export async function POST(req) {
    try {
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
        // req.socket.remoteAddress isn’t accessible here

        await rateLimiter.consume(ip);
    } catch {
        return new Response(
            JSON.stringify({ message: "Too many requests. Chill for a bit." }),
            { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const body = await req.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message || !phone) {
        return new Response(
            JSON.stringify({ message: "Missing required fields" }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
        const client = await clientPromise;
        const db = client.db('shahnawaz');
        const collection = db.collection('contacts');

        await collection.insertOne({ name, email, message, phone, createdAt: new Date() });

        return new Response(
            JSON.stringify({ message: "Message sent! Thanks for reaching out." }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error("DB error:", error);
        return new Response(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
