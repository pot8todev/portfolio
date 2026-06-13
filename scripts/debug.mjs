import { chromium } from "playwright";
const URL = process.env.URL || "http://localhost:3001/";
const browser = await chromium.launch({
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
const info = await page.evaluate(() => ({
  scrollHeight: document.body.scrollHeight,
  innerHeight: window.innerHeight,
  h1Count: document.querySelectorAll("h1").length,
  h2s: [...document.querySelectorAll("h2")].map((h) => h.textContent.trim().slice(0, 40)),
  sectionIds: [...document.querySelectorAll("section")].map((s) => s.id),
  mainCount: document.querySelectorAll("main").length,
}));
console.log(JSON.stringify(info, null, 2));
await browser.close();
