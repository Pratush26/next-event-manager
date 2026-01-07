"use client";

import { useEffect, useState } from "react";

interface User {
    username: string;
    email: string;
    role: string;
}

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/auth/me")
            .then(res => res.json())
            .then(data => {
                setUser(data.user);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!user) return <p>You are not logged in</p>;

    return (
        <div>
            <h1>Dashboard</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
        </div>
    );
}
