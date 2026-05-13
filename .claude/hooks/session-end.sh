#!/usr/bin/env bash
# Appends a one-line session end marker to the daily learning journal.
DIARY="postep/dziennik.md"
DATE="$(date -u +"%Y-%m-%d %H:%M UTC")"
mkdir -p postep
if [ ! -f "${DIARY}" ]; then
  echo "# Dziennik sesji cca-f-prep" > "${DIARY}"
  echo "" >> "${DIARY}"
fi
echo "- ${DATE} — sesja zakończona" >> "${DIARY}"
exit 0
