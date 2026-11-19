/* When the 2027 tracks and sponsors are announced and applications open.

   Imported by vite.config.ts as well as the site, so it must stay free of
   imports. The notes give only the date, so midnight Pacific is assumed; set
   the real hour if the announcement is scheduled. -08:00 because daylight
   saving ends November 1. */
/* Moved from November 22 to November 30 in November 2026, and still
   tentative. Change REVEAL_DATE and REVEAL_AT_MS together: the label is what
   every page shows, the timestamp is what the countdown and the embargo gate
   use. */
export const REVEAL_DATE = "November 30";
export const REVEAL_AT_MS = Date.parse("2026-11-30T00:00:00-08:00");
