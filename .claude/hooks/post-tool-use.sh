#!/usr/bin/env bash
# Logs every tool use as proof of Claude Code practice for Partner Network portfolio.
# Append-only. Not committed (see .gitignore).
LOG_FILE=".claude/hooks/tool-use.log"
TIMESTAMP="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
TOOL="${CLAUDE_TOOL_NAME:-unknown}"
echo "${TIMESTAMP} tool=${TOOL}" >> "${LOG_FILE}"
exit 0
