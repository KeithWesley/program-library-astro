import { db, ProgramsTable } from "astro:db";
import delorme from "./programs-hypertrophy/delorme.json";
import evenEasierStrength from "./programs-strength/evenEasierStrength.json";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(ProgramsTable).values([
    { id: "delorme", goal: "hypertrophy", program: delorme },
    { id: "evenEasierStrength", goal: "strength", program: evenEasierStrength },
  ]);
}
