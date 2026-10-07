/* cseed Buildspace, the collab with an XRA-run Extended Reality track. Shared
   by the home page section and the Projects page invite, so the deadline and
   links cannot drift between them.

   The Apply button goes to cseed's own Buildspace page, which now carries the
   application. The QR keeps pointing at the form directly, because the QR
   image encodes that URL: changing only the link would make scanning and
   tapping the same graphic go to different places, and any QR already printed
   on a flyer still resolves to the form regardless. The form is open. */
export const BUILDSPACE_APPLY = "https://cseed.co/buildspace/";
export const BUILDSPACE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeZVQMGzzQYMKECKOn7Fn5YsbfXQKyMsGFtUpfkwha1w5wHzw/viewform";
export const CSEED = "https://cseed.co/";

// Final deadline per the application form: Oct 10, 2026, 11:59 AM Pacific.
// Everything promoting Buildspace hides itself once applications close.
export const BUILDSPACE_CLOSES = new Date("2026-10-10T11:59:00-07:00");

export const isBuildspaceOpen = () => new Date() < BUILDSPACE_CLOSES;
