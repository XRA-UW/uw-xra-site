import { XMark } from "@/components/Logo";

const Footer = () => (
  <footer className="mt-24 border-t border-white/10">
    <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
      <div className="flex items-center gap-3">
        <XMark className="h-5 w-5 text-brand-green" />
        <span className="text-sm text-muted-foreground">
          Extended Reality Association at the University of Washington
        </span>
      </div>

      <div className="flex items-center gap-5 text-sm">
        <a
          href="https://discord.gg/AA6wF9f63p"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 transition-colors hover:text-brand-green"
        >
          Discord
        </a>
        <a
          href="https://instagram.com/uw_xra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 transition-colors hover:text-brand-green"
        >
          Instagram
        </a>
        <a
          href="https://linktr.ee/uwxra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 transition-colors hover:text-brand-green"
        >
          Linktree
        </a>
        <a
          href="https://luma.com/xra_uw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 transition-colors hover:text-brand-green"
        >
          Luma
        </a>
        <a
          href="https://icxr.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 transition-colors hover:text-brand-green"
        >
          ICXR
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} XRA @ UW
      </p>
    </div>
  </footer>
);

export default Footer;
