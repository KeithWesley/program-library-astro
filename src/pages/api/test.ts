import { ProgramsTable, db, eq } from "astro:db";
import type { ProgramsApiResponseProps } from "../../types/databaseTypes";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const test = params.get("test");
  console.log(url);
  console.log(params);
  console.log("test");
  let data;
  if (test) {
    data = await getPrograms("strength");
  } else {
    data = await getPrograms("hypertrophy");
  }

  return new Response(JSON.stringify(data), {
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
