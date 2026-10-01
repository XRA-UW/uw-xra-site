#!/usr/bin/env bash
#
# Build the site for students.washington.edu/xra/ and upload it over SSH.
# Run from the repo root, in Git Bash on Windows or any POSIX shell:
#
#   ./scripts/deploy-uw.sh                 # build and upload
#   ./scripts/deploy-uw.sh --dry-run       # build only, show what would go up
#
# Overridable:
#   XRA_REMOTE      default xra@vergil.u.washington.edu
#   XRA_REMOTE_DIR  default public_html   (relative to the account's home)
#   XRA_SSH_KEY     path to a key, for unattended use from CI
#
# Upload is a tar stream over a single SSH connection, so interactive logins
# prompt once rather than once per file, and rsync is not required (Git Bash
# does not ship it). It extracts over the top and never deletes, so the
# existing hacktheam/ directory is left untouched. Old hashed assets from
# previous builds accumulate harmlessly; clear them by hand if you care.
#
# Run this in BASH, not PowerShell. On Windows that means Git Bash:
#   bash ./scripts/deploy-uw.sh
# PowerShell cannot execute a .sh file; it hands it to the shell association
# and you get no output and no deploy, which looks like success.
set -euo pipefail

# Node is frequently absent from PATH inside Git Bash even when `npm` works
# fine in PowerShell, because MSYS does not always inherit the Windows user
# PATH the Node installer edits. Fall back to the usual install locations
# rather than failing with a bare "npm: command not found".
if ! command -v npm >/dev/null 2>&1; then
  for d in "$HOME/AppData/Local/Programs/nodejs" "/c/Program Files/nodejs" "/c/Program Files (x86)/nodejs"; do
    if [ -x "$d/npm" ] || [ -x "$d/npm.cmd" ]; then
      PATH="$d:$PATH"
      echo "==> Using Node from $d"
      break
    fi
  done
fi
if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: npm not found. Add Node to PATH, or run from a shell where 'npm -v' works." >&2
  exit 1
fi

REMOTE="${XRA_REMOTE:-xra@vergil.u.washington.edu}"
REMOTE_DIR="${XRA_REMOTE_DIR:-public_html}"
SSH_OPTS=()
[ -n "${XRA_SSH_KEY:-}" ] && SSH_OPTS+=(-i "$XRA_SSH_KEY")

DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

cd "$(dirname "$0")/.."

echo "==> Building for https://students.washington.edu/xra/"
DEPLOY_PATH=xra VITE_SITE_ORIGIN=https://students.washington.edu npm run build

cp deploy/htaccess dist/.htaccess

echo
echo "==> Payload"
find dist -type f | sed 's|^dist/|  |' | sort
echo "  ($(find dist -type f | wc -l) files, $(du -sh dist | cut -f1))"

# Guard against shipping a build made for the wrong base path.
if ! grep -q '<loc>https://students.washington.edu/xra/</loc>' dist/sitemap.xml 2>/dev/null; then
  echo "ERROR: dist/sitemap.xml is not pointing at the UW origin." >&2
  echo "The build did not pick up DEPLOY_BASE/VITE_SITE_ORIGIN. Not uploading." >&2
  exit 1
fi

if [ "$DRY_RUN" = "1" ]; then
  echo
  echo "Dry run. Nothing uploaded."
  exit 0
fi

echo
echo "==> Uploading to $REMOTE:~/$REMOTE_DIR"
tar czf - -C dist . \
  | ssh "${SSH_OPTS[@]}" "$REMOTE" \
      "mkdir -p ~/$REMOTE_DIR && tar xzf - -C ~/$REMOTE_DIR && echo '    extracted ok'"

echo
echo "==> Done. Verify:"
echo "    curl -sI https://students.washington.edu/xra/ | head -1"
echo "    curl -s  https://students.washington.edu/xra/sitemap.xml"
