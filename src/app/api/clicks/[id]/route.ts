import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 404 });
  }

  const collection = await getClicksCollection();
  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return NextResponse.json({ count: result?.count ?? 1 });
}
