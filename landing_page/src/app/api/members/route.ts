export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET handler to fetch all members for the dashboard
export async function GET() {
    try {
        const members = await prisma.member.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(members);
    } catch (error) {
        // Fix: Log the error to satisfy 'defined but never used' or use _error
        console.error("Fetch members error:", error);
        return NextResponse.json(
            { error: "Failed to fetch members" },
            { status: 500 },
        );
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
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
        // Inside POST function
        const mobileNumber = formData.get("mobileNumber") as string;
        const telegramUsername = formData.get("telegramUsername") as string;
        if (!firstName || !lastName || !email || !gender) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        let imageUrl: string | null = null;

        if (imageFile && imageFile.size > 0) {
            const arrayBuffer = await imageFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Fix: Replaced 'any' with 'UploadApiResponse'
            const uploadResponse = await new Promise<UploadApiResponse>(
                (resolve, reject) => {
                    cloudinary.uploader
                        .upload_stream(
                            { folder: "member_uploads" },
                            (error, result) => {
                                if (error) reject(error);
                                else if (result) resolve(result);
                                else
                                    reject(
                                        new Error("Cloudinary upload failed"),
                                    );
                            },
                        )
                        .end(buffer);
                },
            );
            imageUrl = uploadResponse.secure_url;
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
                mobileNumber,
        telegramUsername,
                subCircleNumber: parseInt(subCircleNumber) || 0,
                birthDayMonth: birthDayMonth || "Not Provided",
                favoriteVerse: favoriteVerse || "To be updated",
                image: imageUrl,
                role: "USER",
            },
        });

        // Remove password from response for security
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...memberResponse } = newMember;

        return NextResponse.json(
            { success: true, member: memberResponse },
            { status: 201 },
        );
    } catch (error: unknown) {
        // Fix: Handle 'error' type safely without 'any'
        console.error("Submission error:", error);

        if (
            error &&
            typeof error === "object" &&
            "code" in error &&
            (error as { code: string }).code === "P2002"
        ) {
            return NextResponse.json(
                { error: "Email already exists." },
                { status: 400 },
            );
        }

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}
