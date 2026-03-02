import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

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
    image?: string;
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
) {
    try {
        const formData = await request.formData();
        const id = params.id;

        // Construct the base data object
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

        // --- Handle Image Update ---
        const imageFile = formData.get("image") as File | null;

        // Check if a new file was actually uploaded (not just a string URL)
        if (imageFile && typeof imageFile !== "string" && imageFile.size > 0) {
            const buffer = Buffer.from(await imageFile.arrayBuffer());

            const ext = path.extname(imageFile.name);
            const baseName = path
                .basename(imageFile.name, ext)
                .replace(/[^a-z0-9]/gi, "-")
                .toLowerCase();

            // Collapse multiple hyphens and trim
            const cleanBase = baseName.replace(/-+/g, "-");
            const filename = `${Date.now()}-${cleanBase}${ext.toLowerCase()}`;
            const uploadDir = path.join(process.cwd(), "public", "uploads");

            await mkdir(uploadDir, { recursive: true });
            await writeFile(path.join(uploadDir, filename), buffer);

            // Add the new image path to the update data
            data.image = `/uploads/${filename}`;
        }

        const updatedMember = await prisma.member.update({
            where: { id },
            data: data,
        });

        return NextResponse.json(updatedMember);
    } catch (error: unknown) {
        // Fix: Use the error variable to avoid linting errors
        const errorMessage =
            error instanceof Error ? error.message : "Update failed";
        console.error("Update error details:", errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } },
) {
    try {
        await prisma.member.delete({
            where: { id: params.id },
        });
        return NextResponse.json({ message: "Member deleted" });
    } catch (error: unknown) {
        // Fix: Use the error variable to avoid linting errors
        const errorMessage =
            error instanceof Error ? error.message : "Delete failed";
        console.error("Delete error details:", errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
