// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export async function POST(request: Request) {
//     const { username, password } = await request.json();

//     try {
//         const user = await prisma.member.findUnique({
//             where: { username },
//         });

//         if (!user || user.password !== password) {
//             return NextResponse.json(
//                 { error: "Invalid credentials" },
//                 { status: 401 },
//             );
//         }

//         // Return user info and role
//         return NextResponse.json({
//             success: true,
//             role: user.role,
//             name: `${user.firstName} ${user.lastName}`,
//         });
//     } catch (_error) {
//         // Simply add the underscore
//         console.error(_error); // Optional: You can actually log it now!
//         return NextResponse.json({ error: "Server error" }, { status: 500 });
//     }
// }
export const dynamic = "force-dynamic"; // Prevents build-time pre-rendering errors

import { NextResponse } from "next/server";
// Import the singleton instance from your lib folder
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

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
        console.error("Login Error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
