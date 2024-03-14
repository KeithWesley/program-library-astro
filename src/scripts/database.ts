import { db, eq, ProgramsTable } from "astro:db";
import type { ProgramApiResponseProps } from "../types/databaseTypes";

export let programsData: any;

export async function getProgram(goal: string) {
  try {
    const response = await db
      .select()
      .from(ProgramsTable)
      .where(eq(ProgramsTable.goal, goal));
    return response[0].details as ProgramApiResponseProps;
  } catch (error) {
    console.error("Get Programs API Error: ", error);
    return null;
  }
}

await db
  .select()
  .from(ProgramsTable)
  .then((response) => {
    if (response) {
      programsData = response;
    }
  });
