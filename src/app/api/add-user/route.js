import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { username, email, password } = await request.json();
    console.log({ username, email, password });
    const result = await prisma.user.create({
        data: {
            username,
            email,
            password
        }
    });
    return NextResponse.json({ result });
}