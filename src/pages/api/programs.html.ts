import { db, eq, ProgramsTable } from "astro:db";
import type { ProgramsApiResponseProps } from "../../types/databaseTypes";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ url }) => {
  return new Response(JSON.stringify({ msg: "Hello There!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

// export const GET: APIRoute = async ({ url }): Promise<Response> => {
//   try {
//     const goal: string | null = url.searchParams.get("goal");
//     if (goal === null) {
//       return new Response(
//         JSON.stringify({
//           error: "Invalid query parameter",
//         }),
//         {
//           status: 400,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//     }

//     const data: ProgramsApiResponseProps[] | null = await getPrograms(goal);
//     if (data === null) {
//       return new Response(
//         JSON.stringify({ error: "No data found for the given goal" }),
//         {
//           status: 404,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//     }

//     let htmlContent: string =
//       "<option value=''>-- Select a program --</option>";
//     htmlContent += data
//       .map(
//         (program: any) =>
//           `<option value='${program.value}'>${program.label}</option>`
//       )
//       .join("");

//     return new Response(htmlContent, {
//       status: 200,
//       headers: {
//         "Content-Type": "text/html",
//       },
//     });
//   } catch (error) {
//     console.error("Error processing request:", error);
//     return new Response(
//       JSON.stringify({ error: "Internal server error: " + error }),
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }
// };

async function getPrograms(
  goal: string
): Promise<ProgramsApiResponseProps[] | null> {
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
