import { db, eq, ProgramsTable } from "astro:db";
import type { ProgramsOptionsApiResponseProps } from "../../types/databaseTypes";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  try {
    const params = new URLSearchParams(url.searchParams);
    const goal: string | null = params.get("goal");

    if (goal) {
      const programsData = await getPrograms(goal);

      if (programsData) {
        let htmlContent = '<option value="">-- Select a program --</option>';
        htmlContent += programsData
          .map(
            (program) =>
              `<option value="${program.value}">${program.label}</option>`
          )
          .join("");

        return new Response(htmlContent, {
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

    return options as ProgramsOptionsApiResponseProps[];
  } catch (error) {
    console.error("getPrograms API Error: ", error);
    return null;
  }
}
