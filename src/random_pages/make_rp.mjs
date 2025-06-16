import { generate, count } from "random-words";
import fs from "fs";
import path from "path";

const pages_count = 100;

const tags = generate(15);
function rTag() {
  return tags[Math.floor(Math.random() * tags.length)];
}
function makeTags() {
  return Array.from(new Set([rTag(), rTag(), rTag(), rTag()])).join(",");
}

function makePara() {
  let l = 20 + Math.ceil(Math.random() * 50);
  return generate(l).join(" ");
}

function makeText() {
  return [makePara(), makePara(), makePara()].join("\n\n");
}

function makePage() {
  let fname = generate(2).join("_") + ".md";

  let title_wrds = generate(Math.ceil(Math.random() * 3));
  // console.log(title_wrds);

  let content = `---
title: ${title_wrds.join(" ")}
tags: ${makeTags()}
date: ${new Date().toISOString()}
image: /pix/default.jpg
---
${makeText()}
`;
  fs.writeFileSync(path.join("src/random_pages/out", fname), content, {
    encoding: "utf8",
  });
}

for (let i = 0; i <= pages_count; i++) {
  makePage();
}
