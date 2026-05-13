// partner-form-prefiller.ts
// Opens anthropic.com/partners application form and pre-fills fields from `partner-network/application-draft.md`.
// User clicks Submit manually. Bot does not submit.
//
// Legality: user's own application, user's own data.
//
// TODO: implementation in next iteration (depends on current form structure on anthropic.com).

export async function run(): Promise<void> {
  throw new Error("Not implemented yet. See README for status.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
