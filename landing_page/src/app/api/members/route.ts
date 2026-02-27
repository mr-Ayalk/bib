import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

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

        // 1. Basic Validation
        if (!firstName || !lastName || !email || !gender) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        // 2. Handle File Upload (Saving to public/uploads)
        let imageUrl = null;
        if (imageFile && imageFile.size > 0) {
            const buffer = Buffer.from(await imageFile.arrayBuffer());
            const filename = `${Date.now()}-${imageFile.name.replace(/\s+/g, "-")}`;
            const uploadDir = path.join(process.cwd(), "public", "uploads");

            try {
                // Ensure the directory exists
                await mkdir(uploadDir, { recursive: true });
                // Write the file
                await writeFile(path.join(uploadDir, filename), buffer);
                // The URL path we will store in the DB
                imageUrl = `/uploads/${filename}`;
            } catch (err) {
                console.error("File Save Error:", err);
                // Continue without image if save fails, or throw error
            }
        }

        // 3. Generate a unique username
        const generatedUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(100 + Math.random() * 900)}`;

        // 4. Security: Hash the default password
        const hashedPassword = await bcrypt.hash("changeme123", 10);

        // 5. Save to Prisma (Using your exact schema field names)
        const newMember = await prisma.member.create({
            data: {
                firstName,
                lastName,
                email,
                username: generatedUsername,
                password: hashedPassword,
                department,
                batch,
                gender: gender, // Matches Enum
                subCircleNumber: parseInt(subCircleNumber) || 0,
                birthDayMonth: birthDayMonth || "Not Provided",
                favoriteVerse: favoriteVerse || "To be updated",
                image: imageUrl, // Storing the path string
                role: "USER",
            },
        });

        // Remove password from response for security
        const { password: _, ...memberData } = newMember;

        return NextResponse.json(
            { success: true, member: memberData },
            { status: 201 },
        );
    } catch (error: any) {
        console.error("Create Error Detail:", error);

        if (error.code === "P2002") {
            return NextResponse.json(
                {
                    error: "A member with this email or username already exists.",
                },
                { status: 400 },
            );
        }

        return NextResponse.json(
            { error: "Internal Server Error: " + error.message },
            { status: 500 },
        );
    }
}
