/* Brand marks exported from the XRA 2026 Figma brand file
   (figma.com/design/Lw03Q631UpcQlLA3AKnKve/XRA), taken from the logo
   construction sheet — frame 18:79 — which is the sheet that carries the
   guides and therefore the definitive proportions.
   Re-export from the construction sheet, never redraw by hand. */

/* Node 18:110 — the standalone X mark. Bounding box 250.262 square.
   Also the source for the favicon, the og image and the .x-pattern tile. */
const X_PATH =
  "M251.676 15.811L183.369 84.1183C159.938 107.55 159.938 145.54 183.369 168.971L251.676 237.278L237.279 251.676L168.971 183.368C145.54 159.937 107.55 159.937 84.1183 183.369L15.8121 251.676L1.41424 237.278L69.7215 168.971C93.1529 145.54 93.1529 107.55 69.7215 84.1183L1.41424 15.811L15.8121 1.41421L84.1187 69.7208C107.55 93.1522 145.54 93.1523 168.971 69.7212L237.279 1.41421L251.676 15.811Z";

/* The "XRA" wordmark, node 121:93 — the 2026 redraw. The R is now an open
   bowl (R_BAR) with a sweeping leg (R_LEG), so it takes two paths rather
   than one. All four paths share the group's own 768.694 x 250.262 space,
   so the letterspacing and the relative glyph sizes are exact as exported
   and no per-glyph transform is needed.

   The wordmark's X (W_X) is a marginally different draw from the standalone
   X_PATH above: blunter arm tips, about 2% more ink, IoU 0.94. That split
   exists in the Figma file itself — 18:110 was left untouched by the redraw.
   The two are indistinguishable at any size the site renders them, so each
   mark keeps its own source. Do not "reconcile" them by hand. */
const W_X =
  "M14.7918 0.113643C20.6831 5.35006 28.6142 13.7711 34.36 19.5308L69.6055 54.8451C75.6747 60.9497 87.0262 73.1349 93.7223 77.3173C102.204 82.5726 111.981 85.3605 121.958 85.369C131.476 85.4343 140.826 82.8587 148.969 77.9293C157.719 72.5972 173.058 56.1005 181.095 48.0552L229.09 0C234.082 4.89104 239.009 9.84737 243.868 14.867C227.469 32.81 208.456 49.6859 191.584 67.3976C174.951 84.8577 159.617 94.4344 158.852 121.099C158.032 149.671 176.818 161.258 194.495 179.792C210.823 196.543 227.695 212.556 243.873 229.266C239.153 234.115 233.938 239.313 229.09 244.033C226.591 241.705 213.074 228.479 210.127 225.523L171.147 186.456C164.827 180.131 157.307 171.908 149.954 167.268C142.36 162.509 133.676 159.768 124.726 159.309C97.5494 157.864 85.1637 173.917 67.8587 191.27L34.3924 224.821C28.3012 230.926 21.2183 238.371 14.9149 244.033C9.84943 239.194 4.89758 234.235 0.0638483 229.166C15.4865 214.081 30.965 198.616 46.0454 183.181C63.7476 165.061 83.7319 151.933 84.9425 124.598C85.409 114.291 82.8772 104.074 77.6538 95.1785C72.8998 87.1567 60.108 75.2705 53.1288 68.2857L19.7307 34.9037C13.2897 28.4696 6.03886 21.5373 6.10352e-05 14.8805L14.7918 0.113643Z";

const R_BAR =
  "M436.755 3.19965C470.428 3.19965 497.595 22.6553 506.773 48.1035C512.543 64.1008 510.511 80.1644 505.06 93.5831C499.649 106.902 490.609 118.321 481.072 125.627L468.098 108.688C474.578 103.725 481.293 95.3971 485.292 85.5519C489.252 75.8055 490.288 65.2852 486.701 55.3416C480.884 39.2114 462.383 24.5362 436.755 24.5362H276.577V3.19965H436.755Z";

const R_LEG =
  "M276.576 100.77C393.324 98.6265 466.752 161.712 497.428 250.262H476.158C467.017 226.111 454.417 204.409 438.495 186.06C403.16 145.338 349.95 119.333 276.576 120.773V100.77Z";

const W_A =
  "M768.694 247.45H749.415V230.288C749.415 220.049 734.162 214.939 726.406 221.624C705.705 239.47 678.75 250.261 649.274 250.261L647.746 250.251C583.173 249.433 531.078 196.832 531.078 132.064C531.078 66.7869 583.996 13.8691 649.274 13.8688C678.749 13.8688 705.705 24.6584 726.406 42.5034C734.162 49.1888 749.415 44.0785 749.415 33.8392V13.8676H768.694V247.45ZM649.274 33.1481C594.644 33.1485 550.358 77.4346 550.357 132.064C550.358 186.694 594.644 230.981 649.274 230.982C703.904 230.982 748.191 186.694 748.191 132.064C748.191 77.4344 703.904 33.1481 649.274 33.1481Z";

export const XMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 250.262 250.262"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d={X_PATH} transform="translate(-1.4142 -1.4142)" />
  </svg>
);

export const XraWordmark = ({
  className,
  title = "XRA",
}: {
  className?: string;
  title?: string;
}) => (
  <svg
    viewBox="0 0 768.694 250.262"
    className={className}
    fill="currentColor"
    role="img"
    aria-label={title}
  >
    <path d={W_X} />
    <path d={R_BAR} />
    <path d={R_LEG} />
    <path d={W_A} fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

/* Full lockup: wordmark over the "Extended Reality Association" line. */
export const XraLockup = ({ className }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className ?? ""}`}>
    <XraWordmark className="w-full" title="XRA — Extended Reality Association" />
    <span
      aria-hidden="true"
      className="mt-[0.06em] font-light leading-none tracking-tight"
      style={{ fontSize: "0.107em" }}
    >
      Extended Reality Association
    </span>
  </div>
);
