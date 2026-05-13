// skilljar-tracker.ts
// Logs into Anthropic Academy (Skilljar), reads course completion state, writes a JSON snapshot.
// Used to track progress toward CCA-F preparation.
//
// Legality: user's own account, user's own data. No scraping of other users.
//
// TODO: implementation in next iteration.

export async function run(): Promise<void> {
  throw new Error("Not implemented yet. See README for status.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
