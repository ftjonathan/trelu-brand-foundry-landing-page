import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Trelu landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Trelu Brand Foundry \| Brand &amp; Growth Strategy<\/title>/i);
  assert.match(
    html,
    /<h1[^>]*>[\s\S]*FORGE A[\s\S]*POSITION THE[\s\S]*MARKET CAN’T[\s\S]*IGNORE\.[\s\S]*<\/h1>/i,
  );
  assert.match(html, /Trelu is an entrepreneur-led brand and growth foundry for complex[\s\S]*businesses entering pivotal change\./i);
  assert.match(html, /We forge the clarity, position, brand, and market systems required[\s\S]*to outposition competitors and reshape industries\./i);
  assert.match(html, /Our full website is taking shape\./i);
  assert.match(html, /THE FOUNDRY IS ACTIVE\./i);
  assert.match(html, /href="mailto:hello@trelu\.com"/i);
  assert.match(html, />START A CONVERSATION</i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
