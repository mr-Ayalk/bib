import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET: Fetch all members for the dashboard table
export async function GET() {
    try {
        const members = await prisma.member.findMany({
            orderBy: { firstName: "asc" },
        });
        return NextResponse.json(members);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch members" },
            { status: 500 },
        );
    }
}

// POST: Register a new member
export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            firstName,
            lastName,
            email,
            department,
            batch,
            gender,
            subCircleNumber,
            birthDayMonth,
            favoriteVerse,
        } = body;

        // Generate a unique username: firstname.lastname + random 3-digit number
        const generatedUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(100 + Math.random() * 900)}`;

        const newMember = await prisma.member.create({
            data: {
                firstName,
                lastName,
                email,
                username: generatedUsername,
                password: "changeme123", // Default password for first login
                department,
                batch,
                gender, // Must be "MALE" or "FEMALE" as per schema
                subCircleNumber: parseInt(subCircleNumber),
                birthDayMonth: birthDayMonth || "Not Provided",
                favoriteVerse: favoriteVerse || "To be updated",
                role: "USER", // Default role
            },
        });

        return NextResponse.json(
            { success: true, member: newMember },
            { status: 201 },
        );
    } catch (error: any) {
        console.error("Create Error:", error);
        if (error.code === "P2002") {
            return NextResponse.json(
                {
                    error: "A member with this email or username already exists.",
                },
                { status: 400 },
            );
        }
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}
