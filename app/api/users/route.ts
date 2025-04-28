export const dynamic = 'force-dynamic'
import { NextResponse } from "next/server";
import { getAllUsers } from "../database";

export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json(users);
}
