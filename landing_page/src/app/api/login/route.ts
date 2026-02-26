import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { username, password } = await request.json();

    try {
        const user = await prisma.member.findUnique({
            where: { username },
        });

        if (!user || user.password !== password) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 },
            );
        }

        // Return user info and role
        return NextResponse.json({
            success: true,
            role: user.role,
            name: `${user.firstName} ${user.lastName}`,
        });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
