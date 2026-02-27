export const dynamic = "force-dynamic";

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
    } catch {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Extracting fields
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const department = formData.get("department") as string;
        const batch = formData.get("batch") as string;
        const gender = formData.get("gender") as "MALE" | "FEMALE";
        const subCircleNumber = formData.get("subCircleNumber") as string;
        const birthDayMonth = formData.get("birthDayMonth") as string;
        const favoriteVerse = formData.get("favoriteVerse") as string;
        const imageFile = formData.get("image") as File | null;

        if (!firstName || !lastName || !email || !gender) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        // Image Handling (Note: On Vercel, public/uploads is ephemeral)
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
                console.error("Local Save Error:", err);
            }
        }

        const generatedUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(100 + Math.random() * 900)}`;
        const hashedPassword = await bcrypt.hash("changeme123", 10);

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

        const { password: _, ...memberResponse } = newMember;
        return NextResponse.json(
            { success: true, member: memberResponse },
            { status: 201 },
        );
    } catch (error: unknown) {
        if (
            error &&
            typeof error === "object" &&
            "code" in error &&
            (error as { code: string }).code === "P2002"
        ) {
            return NextResponse.json(
                { error: "Email or username already exists." },
                { status: 400 },
            );
        }
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}
