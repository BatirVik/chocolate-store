import { CreateUserScheme } from "@/lib/schemes";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = CreateUserScheme.parse(body);
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(error.errors, { status: 422 });
    }
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 422 },
      );
    }
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
