import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// 1. GET: Fetch all members
export async function GET() {
    try {
        const members = await prisma.member.findMany({
            orderBy: { firstName: "asc" },
        });
        return NextResponse.json(members);
    } catch {
        // Removed 'error' variable to satisfy 'no-unused-vars'
        return NextResponse.json(
            { error: "Failed to fetch members" },
            { status: 500 },
        );
    }
}

// 2. POST: Create a new member
export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Extract text fields
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const department = formData.get("department") as string;
        const batch = formData.get("batch") as string;
        const gender = formData.get("gender") as "MALE" | "FEMALE";
        const subCircleNumber = formData.get("subCircleNumber") as string;
        const birthDayMonth = formData.get("birthDayMonth") as string;
        const favoriteVerse = formData.get("favoriteVerse") as string;

        // Extract the file
        const imageFile = formData.get("image") as File | null;

        // Basic Validation
        if (!firstName || !lastName || !email || !gender) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        // Handle File Upload
        let imageUrl = null;
        if (imageFile && imageFile.size > 0) {
            const buffer = Buffer.from(await imageFile.arrayBuffer());
            const filename = `${Date.now()}-${imageFile.name.replace(/\s+/g, "-")}`;
            const uploadDir = path.join(process.cwd(), "public", "uploads");

            try {
                await mkdir(uploadDir, { recursive: true });
                await writeFile(path.join(uploadDir, filename), buffer);
                imageUrl = `/uploads/${filename}`;
            } catch (err) {
                console.error("File Save Error:", err);
                // Continue without image if save fails
            }
        }

        // Generate unique username & hash default password
        const generatedUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(100 + Math.random() * 900)}`;
        const hashedPassword = await bcrypt.hash("changeme123", 10);

        // Save to Database
        const newMember = await prisma.member.create({
            data: {
                firstName,
                lastName,
                email,
                username: generatedUsername,
                password: hashedPassword,
                department,
                batch,
                gender,
                subCircleNumber: parseInt(subCircleNumber) || 0,
                birthDayMonth: birthDayMonth || "Not Provided",
                favoriteVerse: favoriteVerse || "To be updated",
                image: imageUrl,
                role: "USER",
            },
        });

        // LINT FIX: Avoid unused '_' variable by cloning and deleting the property
        // We use 'Record<string, unknown>' to safely handle the deletion logic
        const memberResponse = { ...newMember } as Record<string, unknown>;
        delete memberResponse.password;

        return NextResponse.json(
            { success: true, member: memberResponse },
            { status: 201 },
        );
    } catch (error: unknown) {
        console.error("Create Error Detail:", error);

        // LINT FIX: Type guard to check for Prisma P2002 (Unique Constraint)
        // without using 'any'
        if (
            error &&
            typeof error === "object" &&
            "code" in error &&
            (error as { code: string }).code === "P2002"
        ) {
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
