import { db, ProgramsTable } from "astro:db";

export let programsData: any;

await db
  .select()
  .from(ProgramsTable)
  .then((response) => {
    if (response) {
      programsData = response;
    }
  });
