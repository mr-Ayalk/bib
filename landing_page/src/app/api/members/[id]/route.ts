import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Define a type for the update payload to avoid 'any'
interface MemberUpdateData {
    firstName?: string;
    lastName?: string;
    email?: string;
    birthDayMonth?: string;
    department?: string;
    batch?: string;
    subCircleNumber?: number;
    favoriteVerse?: string;
    gender?: "MALE" | "FEMALE";
    image?: string; // or imageUrl depending on your schema
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
) {
    try {
        const formData = await request.formData();
        const id = params.id;

        // FIX: Replaced 'any' with our typed object
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
        };

        const image = formData.get("image");
        if (image instanceof File && image.size > 0) {
            // Your image saving logic here...
            // data.image = savedUrl;
        }

        const updatedMember = await prisma.member.update({
            where: { id },
            data: data,
        });

        return NextResponse.json(updatedMember);
    } catch {
        // FIX: Removed unused 'error' variable
        return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
}
