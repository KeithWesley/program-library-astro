import { db, eq, ProgramsTable } from "astro:db";
import type { ProgramApiResponseProps } from "../../types/databaseTypes";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  try {
    const params = new URLSearchParams(url.searchParams);
    const goal: string | null = params.get("id");

    if (goal) {
      const programsData = await getProgram(goal);

      if (programsData) {
        return new Response(JSON.stringify(programsData), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        return new Response(
          JSON.stringify({ error: "No data found for the given goal" }),
          {
            status: 404,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid query parameter" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);

    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

async function getProgram(id: string) {
  try {
    const response = await db
      .select()
      .from(ProgramsTable)
      .where(eq(ProgramsTable.id, id));
    return response[0] as ProgramApiResponseProps;
  } catch (error) {
    console.error("getPrograms API Error: ", error);
    return null;
  }
}
