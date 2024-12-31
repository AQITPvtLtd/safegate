import { NextResponse } from "next/server";
import pool from "@/helper/db";

export async function GET() {
  try {
    const [results] = await pool.query("SELECT * FROM blogs ORDER BY id DESC");
    // console.log(results);
    return NextResponse.json({
      message: "Success",
      success: true,
      results: results,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
