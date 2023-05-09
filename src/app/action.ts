"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/db";
import { presses } from "~/db/schema";

export const increment = async () => {
  console.log("yo");
  await db.insert(presses).values({});
  revalidatePath("/");
};

// export const runtime = "edge";
// export const regions = ["iad1"];
