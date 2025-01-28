import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ message: "User created successfully" })
  } catch (error: any) {
    console.error("Signup error:", error)

    // Check if it's a Prisma error
    if (error.code === "P2002") {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 })
    }

    return NextResponse.json({ error: "Error creating user" }, { status: 500 })
  }
}

