import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ message: "User created successfully" })
  } catch (error) {
    console.error("Signup error:", error)

    if (error instanceof Error) {
      // Check if it's a Prisma error
      if ("code" in error && error.code === "P2002") {
        return NextResponse.json({ error: "Email already exists" }, { status: 400 })
      }
    }

    return NextResponse.json({ error: "Error creating user" }, { status: 500 })
  }
}

