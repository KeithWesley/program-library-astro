import { db, eq, ProgramsTable } from "astro:db";
import type { ProgramsApiResponseProps } from "../types/databaseTypes";

export let programsData: any;

export async function getPrograms(goal: string) {
  try {
    const response = await db
      .select()
      .from(ProgramsTable)
      .where(eq(ProgramsTable.goal, goal));
    return response as ProgramsApiResponseProps[];
  } catch (error) {
    console.error("getPrograms API Error: ", error);
    return null;
  }
}
