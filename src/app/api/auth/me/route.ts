import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { mongoConnect } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { verifyToken } from "@/lib/verifyToken";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) return NextResponse.json({ user: null }, { status: 401 });

        const decoded = verifyToken(token);
        if (!decoded) return NextResponse.json({ user: null }, { status: 401 });

        const { db } = await mongoConnect();
        const user = await db.collection("users").findOne({ _id: new ObjectId(decoded.id) }, { projection: { password: 0 } });

        if (!user) return NextResponse.json({ user: null }, { status: 404 });

        return NextResponse.json({ user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
}
