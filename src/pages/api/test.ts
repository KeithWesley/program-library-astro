import { ProgramsTable, db, eq } from "astro:db";
import type { ProgramsApiResponseProps } from "../../types/databaseTypes";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const test: string | null = url.searchParams.get("test");
  let data;

  if (test === null) {
    return new Response(JSON.stringify({ error: "Test param is null." }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    data = await getPrograms("hypertrophy");
  }

  return new Response(JSON.stringify({ message: "This was a GET, " + data }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

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
