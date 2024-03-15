import { db, ProgramsTable } from "astro:db";
import delorme from "./programs-hypertrophy/delorme.json";
import evenEasierStrength from "./programs-strength/evenEasierStrength.json";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(ProgramsTable).values([
    {
      id: "delorme",
      title: "Delorme Hypertrophy Program",
      goal: "hypertrophy",
      program: delorme,
    },
    {
      id: "evenEasierStrength",
      title: "Even Easier Strength Program",
      goal: "strength",
      program: evenEasierStrength,
    },
  ]);
}
