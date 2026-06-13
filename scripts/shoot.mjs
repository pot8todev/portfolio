import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const URL = process.env.URL || "http://localhost:3001/";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  args: [
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist",
    "--enable-webgl",
  ],
});

const sections = ["top", "sobre", "stack", "projetos", "experiencia", "contato"];
const logs = [];

async function shoot(name, width, height) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1.5,
  });
  const page = await ctx.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") logs.push(`[${name}] ${m.text()}`);
  });
  page.on("pageerror", (e) => logs.push(`[${name}] PAGEERROR ${e.message}`));
  await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2000);

  // Hero / fold
  await page.screenshot({ path: `${OUT}/${name}-hero.png`, fullPage: false });

  // Scroll through everything once to trigger ALL whileInView reveals (once:true keeps them on)
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.5;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });

  // Per-section element screenshots (reliable, no fullPage stitching artifacts)
  for (const id of sections) {
    if (id === "top") continue;
    const el = page.locator(`#${id}`);
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(250);
    await el.screenshot({ path: `${OUT}/${name}-${id}.png` });
  }
  await ctx.close();
  console.log(`✓ ${name} (${width}x${height})`);
}

await shoot("desktop", 1440, 900);
await shoot("mobile", 390, 844);

await browser.close();
console.log("\nConsole errors:", logs.length ? "\n" + logs.join("\n") : "none");
