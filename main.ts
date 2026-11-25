// A hopeless support agent's last resort, delivered with total confidence:
// the customer's router is fine — it's their expectations that need a reboot.
import { promises as fsp } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Have you tried turning it off and on again? The router, I mean — your marriage is outside my support tier, but the router is on me.";

function validate(text: string, limit: number): void {
  if (text.length === 0 || text.length >= limit || !text.trim()) {
    throw new Error("reply fails the length gate");
  }
}

void (async () => {
  validate(REPLY, 200);
  if (!REPLY.endsWith(".")) throw new Error("reply must end with a period");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await fsp.mkdir(outDir, { recursive: true });
  await fsp.writeFile(join(outDir, "entry.txt"), REPLY, "utf8");
})();
