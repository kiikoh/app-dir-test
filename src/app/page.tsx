import { Suspense } from "react";
import Button from "./button";
import { db } from "~/db";
import { desc } from "drizzle-orm";
import { presses } from "~/db/schema";

export default async function HomePage() {
  const [latestPress] = await db
    .select()
    .from(presses)
    .orderBy(desc(presses.pressedAt))
    .limit(1);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Hi there</p>
      <Button latestPress={latestPress} />
      <p>Unoptimistic Count: {latestPress?.id}</p>
    </div>
  );
}
