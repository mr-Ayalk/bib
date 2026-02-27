// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function PUT(
//     request: Request,
//     { params }: { params: { id: string } },
// ) {
//     try {
//         const formData = await request.formData();
//         const id = params.id;

//         const data: any = {
//             firstName: formData.get("firstName"),
//             lastName: formData.get("lastName"),
//             email: formData.get("email"),
//             birthDayMonth: formData.get("birthDayMonth"),
//             department: formData.get("department"),
//             batch: formData.get("batch"),
//             subCircleNumber: parseInt(
//                 formData.get("subCircleNumber") as string,
//             ),
//             favoriteVerse: formData.get("favoriteVerse"),
//             gender: formData.get("gender"),
//         };

//         // Only update image if a new one was provided
//         const image = formData.get("image");
//         if (image && (image as File).size > 0) {
//             // Logic to save image and get URL goes here
//             // data.imageUrl = savedUrl;
//         }

//         const updatedMember = await prisma.member.update({
//             where: { id },
//             data: data,
//         });

//         return NextResponse.json(updatedMember);
//     } catch (error) {
//         return NextResponse.json({ error: "Update failed" }, { status: 500 });
//     }
// }
