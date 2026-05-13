// content-scraper.ts
// Pulls Anthropic public documentation into a local knowledge base for offline reference.
// Respects robots.txt and docs.claude.com ToS. Read carefully before running.
//
// TODO: implementation in next iteration. ToS check first.

export async function run(): Promise<void> {
  throw new Error("Not implemented yet. See README for status.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
