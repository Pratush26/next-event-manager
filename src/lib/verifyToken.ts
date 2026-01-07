import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET) as {
            id: string;
            email: string;
            role: string;
        };
    } catch {
        return null;
    }
}