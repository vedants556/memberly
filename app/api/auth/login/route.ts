import { NextResponse } from "next/server"

// This is a simplified authentication API for demonstration purposes
// In a real application, you would use a proper authentication system

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // In a real app, you would validate credentials against a database
    // For demo purposes, we'll accept any email with a password longer than 5 characters
    if (!email || password.length < 6) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    // In a real app, you would create a session or JWT token here
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
