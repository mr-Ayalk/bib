import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Interface for the update data object to avoid 'any'
interface MemberUpdateData {
    firstName: string;
    lastName: string;
    email: string;
    birthDayMonth: string;
    department: string;
    batch: string;
    subCircleNumber: number;
    favoriteVerse: string;
    gender: "MALE" | "FEMALE";
    image?: string; // Optional field for the Cloudinary URL
    mobileNumber?: string;
    telegramUsername?: string;
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
) {
    try {
        const formData = await request.formData();
        const id = params.id;

        const data: MemberUpdateData = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
            birthDayMonth: formData.get("birthDayMonth") as string,
            department: formData.get("department") as string,
            batch: formData.get("batch") as string,
            subCircleNumber:
                parseInt(formData.get("subCircleNumber") as string) || 0,
            favoriteVerse: formData.get("favoriteVerse") as string,
            gender: formData.get("gender") as "MALE" | "FEMALE",
            mobileNumber: formData.get("mobileNumber") as string,
            telegramUsername: formData.get("telegramUsername") as string,
        };

        const imageFile = formData.get("image") as File | null;

        // Using Cloudinary for Update/Edit
        if (imageFile && typeof imageFile !== "string" && imageFile.size > 0) {
            const arrayBuffer = await imageFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Use UploadApiResponse instead of 'any'
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

            data.image = uploadResponse.secure_url;
        }

        const updatedMember = await prisma.member.update({
            where: { id },
            data: data,
        });

        return NextResponse.json(updatedMember);
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Internal Server Error";
        console.error("Update error:", errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

export async function DELETE(
    _request: Request, // Prefixed with _ to show it is intentionally unused
    { params }: { params: { id: string } },
) {
    try {
        await prisma.member.delete({ where: { id: params.id } });
        return NextResponse.json({ message: "Member deleted" });
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
