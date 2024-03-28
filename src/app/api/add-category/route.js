import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json();
    const { categoryName, categoryDescription, labelColor, parentCategoryId } = res;
    console.log(res)
    const newCategory = await prisma.category.create({
        data: {
            categoryName,
            categoryDescription,
            labelColor,
            parentCategoryId
        }
    });

    return NextResponse.json({ newCategory });
}