/* Brand marks traced directly from the XRA 2026 Figma brand file
   (figma.com/design/Lw03Q631UpcQlLA3AKnKve/XRA — "Moodboarding" page).
   Geometry is the exported vector data, not an approximation: do not redraw by hand. */

/* Node 18:48 "Vector" — the X mark, used standalone as the icon. */
const X_PATH =
  "M11.0921 0.0852193C15.5099 4.01194 21.4574 10.3268 25.766 14.6459L52.1962 41.1276C56.7474 45.7054 65.2597 54.8429 70.2811 57.9792C76.6411 61.9201 83.9729 64.0108 91.4545 64.0171C98.5922 64.0661 105.604 62.1346 111.71 58.4381C118.271 54.4397 129.774 42.069 135.801 36.036L171.792 0C175.535 3.66773 179.23 7.38442 182.873 11.1486C170.576 24.6038 156.318 37.2588 143.666 50.5406C131.193 63.6337 119.695 70.8152 119.121 90.8105C118.506 112.236 132.593 120.925 145.849 134.824C158.093 147.385 170.745 159.393 182.877 171.924C179.338 175.56 175.751 179.151 172.115 182.691C170.365 182.635 159.781 171.333 157.572 169.117L128.341 139.821C123.602 135.078 117.963 128.912 112.448 125.432C106.754 121.863 100.242 119.808 93.5301 119.464C73.1509 118.38 63.8631 130.418 50.8863 143.431L25.7903 168.59C21.2227 173.168 15.9113 178.752 11.1844 182.997C7.38591 179.368 3.67259 175.65 0.0478332 171.849C11.6131 160.536 23.2202 148.94 34.5288 137.365C47.8034 123.777 62.7894 113.933 63.6972 93.4341C64.047 85.7054 62.1485 78.0437 58.2315 71.3731C54.6665 65.3577 45.0741 56.4443 39.8405 51.2066L14.7958 26.1738C9.96574 21.349 4.52842 16.1505 0 11.1587L11.0921 0.0852193Z";

/* Node 18:59 "Exclude" — the R. */
const R_PATH =
  "M77.0079 0.281537C89.8827 0.281163 110.326 -0.92418 122.143 1.65601C159.186 9.7436 171.567 56.7253 145.026 82.8007C130.088 97.4729 114.324 97.1779 95.5595 96.763C118.035 119.967 142.04 143.363 164.945 166.283C163.11 168.16 155.396 176.314 153.509 177.267L152.769 176.841L103.692 127.715C96.0156 120.031 88.1634 111.861 80.1247 104.574C74.5115 99.4876 65.5311 96.8304 57.9595 96.7556C46.8039 96.5986 36.0551 100.945 28.1471 108.816C15.7624 121.182 16.1319 133.063 16.1506 148.913L16.1954 172.566L0.200044 172.584C0.749415 115.416 -0.663244 57.3309 0.424278 0.28652L77.0079 0.281537ZM99.536 16.0776C96.6318 16.1019 93.7244 16.1069 90.8166 16.1075V16.0868H15.6274V81.099H90.8166V81.0043L105.545 81.011C116.167 80.9699 125.69 79.3332 133.549 71.5341C140.055 64.4847 143.433 57.1024 143.06 47.3152C142.768 38.6484 138.979 30.4693 132.555 24.6434C123.563 16.4775 111.013 15.9812 99.536 16.0776Z";

/* Node 18:56 "Union" — the A. */
const A_PATH =
  "M178.185 175.16H163.728V171.148C163.728 160.909 147.87 155.352 139.489 161.235C125.093 171.338 107.556 177.268 88.6333 177.268L87.488 177.261C39.0653 176.647 0.000222693 137.202 0 88.6341C0.00011221 39.6835 39.6827 0.00111106 88.6333 0.000830498C107.556 0.000830498 125.093 5.9307 139.489 16.0335C147.871 21.9154 163.728 16.3589 163.728 6.11959V0H178.185V175.16ZM88.6333 14.4581C47.6672 14.4584 14.4574 47.668 14.4573 88.6341C14.4575 129.6 47.6673 162.811 88.6333 162.811C129.6 162.811 162.81 129.6 162.81 88.6341C162.81 47.6678 129.6 14.4581 88.6333 14.4581Z";

export const XMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 182.877 182.997"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d={X_PATH} />
  </svg>
);

/* The "XRA" wordmark. Glyph offsets are the Figma group's own coordinates
   (group 18:203, origin 671.783, 410.854), so the spacing is exact. The R and
   the a sit 10.4 lower than the X and overhang it: the box has to be 187.667
   tall, not the X's 182.997, or their bowls get sliced flat at the baseline. */
export const XraWordmark = ({
  className,
  title = "XRA",
}: {
  className?: string;
  title?: string;
}) => (
  <svg
    viewBox="0 0 576.434 187.667"
    className={className}
    fill="currentColor"
    role="img"
    aria-label={title}
  >
    <path d={X_PATH} />
    <path d={R_PATH} transform="translate(221.523 10.4)" />
    <path
      d={A_PATH}
      transform="translate(398.249 10.399)"
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
      style={{ fontSize: "0.145em" }}
    >
      Extended Reality Association
    </span>
  </div>
);
