import { column, defineDb, defineTable } from "astro:db";

export const ProgramsTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    goal: column.text(),
    details: column.json(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { ProgramsTable },
});
