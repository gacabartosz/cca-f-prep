// linkedin-publisher.ts
// Reads draft from `content/linkedin/<latest>.md`, opens LinkedIn composer, fills the post.
// User clicks Publish manually. Bot does not publish.
//
// Per project policy: NEVER auto-publish on Buffer/LinkedIn — drafts only.
//
// TODO: implementation in next iteration.

export async function run(): Promise<void> {
  throw new Error("Not implemented yet. See README for status.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
