// mock-exam-runner.ts
// Renders questions from `domeny/*/scenariusze-egzaminacyjne.md` as a local browser UI.
// Times the session, records answers, writes results to `postep/tydzien-XX.md`.
//
// Local only. Questions are user-generated via `/scenariusz`. Not connected to the real CCA-F exam.
//
// TODO: implementation in next iteration (~300 lines, local Express + Playwright-rendered UI).

export async function run(): Promise<void> {
  throw new Error("Not implemented yet. See README for status.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
