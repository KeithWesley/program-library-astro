import { ProgramsTable, db, eq } from "astro:db";
import type { ProgramsApiResponseProps } from "../../types/databaseTypes";

export async function GET({ request }: any) {
  console.log(request);

  return new Response(JSON.stringify({ message: "This was a GET!" }));
}

async function getPrograms(goal: string) {
  try {
    const response = await db
      .select()
      .from(ProgramsTable)
      .where(eq(ProgramsTable.goal, goal));

    const options = response.map((res) => ({
      value: res.id,
      label: res.title,
    }));

    return options as ProgramsApiResponseProps[];
  } catch (error) {
    console.error("getPrograms API Error: ", error);
    return null;
  }
}
``;
