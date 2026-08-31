/* Brand marks exported from the XRA 2026 Figma brand file
   (figma.com/design/Lw03Q631UpcQlLA3AKnKve/XRA), taken from the logo
   construction sheet — frame 18:79 — which is the sheet that carries the
   guides and therefore the definitive proportions. The cover slide (13:2)
   holds a slightly different draw: its X is 3% wider relative to the R and
   the a, which makes the X read heavier than the letters beside it.
   Re-export from the construction sheet, never redraw by hand.

   Each path keeps its exported coordinates; the translate() puts the glyph's
   own bounding box at the origin (Figma pads exports by ~1.4 units). */

/* Node 18:109 / 18:110 — the X. Bounding box 250.262 square. */
const X_PATH =
  "M251.676 15.811L183.369 84.1183C159.938 107.55 159.938 145.54 183.369 168.971L251.676 237.278L237.279 251.676L168.971 183.368C145.54 159.937 107.55 159.937 84.1183 183.369L15.8121 251.676L1.41424 237.278L69.7215 168.971C93.1529 145.54 93.1529 107.55 69.7215 84.1183L1.41424 15.811L15.8121 1.41421L84.1187 69.7208C107.55 93.1522 145.54 93.1523 168.971 69.7212L237.279 1.41421L251.676 15.811Z";

/* Node 18:101 — the R. Bounding box 232.878 x 250.999. */
const R_PATH =
  "M109.731 1.37676C127.907 1.37624 156.768 -0.32543 173.451 3.31721C225.748 14.735 243.227 81.8003 205.756 118.613C184.668 139.327 162.413 138.91 135.922 138.324C167.652 171.084 201.541 204.113 233.878 236.471C231.287 239.12 220.398 250.633 217.733 251.978L216.689 251.377L147.402 182.021C136.565 171.174 125.48 159.64 114.131 149.352C106.207 142.171 93.5284 138.42 82.8391 138.314C67.0899 138.092 51.9152 144.229 40.7509 155.341C23.2664 172.799 23.7881 189.572 23.8145 211.947L23.8146 251.377L1.23275 251.402C2.00833 170.694 0.0772695 81.9173 1.6126 1.3838L109.731 1.37676ZM141.535 24.4152C137.435 24.4495 133.331 24.4566 129.226 24.4574V24.4281H23.0759V116.21H129.226V116.077L150.019 116.086C165.014 116.028 178.458 113.718 189.554 102.707C198.74 92.7548 203.509 82.3328 202.981 68.5154C202.57 56.2799 197.22 44.7329 188.151 36.5081C175.456 24.9797 157.738 24.2791 141.535 24.4152Z";

/* Node 18:100 — the a. Bounding box 251.556 x 250.262. */
const A_PATH =
  "M252.556 251.262H232.146V242.622C232.146 228.166 209.759 220.322 197.926 228.626C177.603 242.89 152.844 251.262 126.13 251.262L124.513 251.251C56.1512 250.385 1.00031 194.698 1 126.131C1.00016 57.0239 57.0228 1.00157 126.13 1.00117C152.844 1.00117 177.603 9.37278 197.927 23.6356C209.759 31.9395 232.146 24.095 232.146 9.63944V1H252.556V251.262ZM126.13 21.4116C68.2951 21.412 21.4106 68.2962 21.4104 126.131C21.4107 183.965 68.2952 230.851 126.13 230.851C183.965 230.851 230.85 183.966 230.85 126.131C230.85 68.296 183.965 21.4116 126.13 21.4116Z";

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

/* The "XRA" wordmark. Glyph offsets come from the construction sheet's own
   coordinates, so the letterspacing and the relative glyph sizes are exact. */
export const XraWordmark = ({
  className,
  title = "XRA",
}: {
  className?: string;
  title?: string;
}) => (
  <svg
    viewBox="0 0 784.696 251"
    className={className}
    fill="currentColor"
    role="img"
    aria-label={title}
  >
    <path d={X_PATH} transform="translate(-1.4142 -0.6774)" />
    <path d={R_PATH} transform="translate(279.2618 -0.9793)" />
    <path
      d={A_PATH}
      transform="translate(532.1401 -0.262)"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

/* Full lockup: wordmark over the "Extended Reality Association" line,
   matching the proportions on the Figma cover slide (13:2). */
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
