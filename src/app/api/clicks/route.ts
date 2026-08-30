import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

export async function GET() {
  const collection = await getClicksCollection();
  const docs = await collection
    .find({ _id: { $in: links.map((link) => link.id) } })
    .toArray();

  const counts: Record<string, number> = {};
  for (const link of links) {
    counts[link.id] = 0;
  }
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}
