---
title: "Hooks"
tags: 
date: "2025.08.12 18:54"
id: b9cc5c7eee2ed604a95e22bedf621fed
doc: hooks_en
excerpt: |-
  Hooks allow running arbitrary scripts during site generation.
  They can be written in any language.
---

Hooks are scripts that automatically run before and after site generation.
They can be used, for example, to download external content, process images, and perform other resource-intensive tasks. Hooks can be written in any programming language.

---

## Configuration

To use hooks, you need to create a `hooks` subdirectory in the [site directory](/+doc:site_dir_en) and place the corresponding scripts there.

When a hook is triggered, files from the `hooks` directory with names matching the hook name (regardless of extension) will be executed first, followed by files from the `hooks/<hook name>.d` directory in alphabetical order. For hooks with `.js`, `.mjs`, and `.cjs` extensions, a separate Node.js process is started; other types are simply executed (i.e., they must be executable by OS).

The script's working directory will be the site directory, and additional information (see below) will be passed to standard input. Hook output is buffered and printed after completion.

## Available Hooks

### before

Runs before generation.

### after

Runs after generation is complete; receives the output directory on standard input.
In Node.js, it can be used like this:

```js
// hooks/after.d/myhook.js
process.stdio.on("data" , 
(d)=>{
  let output_dir = d.toString(); 
  // do stuff
})

```

Or in a shell script, publishing via surge.sh:

```bash
#!/usr/bin/env sh
# hooks/after.sh
read PRJ_DIR  # Read the input
surge --project $PRJ_DIR

```
