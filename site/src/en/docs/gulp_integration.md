---
title: Integration with gulp
tags: Recipes
doc: gulp_en
---

Mukha easily integrates into the development process with gulp, providing fast
site preview in the browser and allowing the combination of
css and site template development into a single process.

With Mukha, extensions like Browsersync are not needed, as it contains a built-in
preview mode that does not write any files to disk, which is convenient
and environmentally friendly.

The provided example assumes that the site directory is located at
the top level of the project directory, and there is also a directory with
scss files.

Here's how you can define a gulp task:

```javascript
const exec = require("child_process").exec;

async function watchSite() {
  exec("mukha-ssg -w", { cwd: "." }, (err, out, stderr) => {
    out && console.log(out);
    stderr && console.log(stderr);
    err && console.error(err);
  });
}

exports.watchSite = watchSite;
```

You can then run this task with the usual `gulp watchSite`. At the same time,
since Mukha tracks all changes in the site directory, you can simultaneously
run a task that will monitor changes in css and save updated
theme files:

```javascript
const sass = require("gulp-sass")(require("sass"));

// This task generates css and saves it
// to the site theme folder.
async function buildCSS() {
  return src("scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("site/config/themes/basic/assets/"));
}

// This one monitors changes in the source files
// and triggers generation as needed.
async function watchCSS() {
  return watch(["scss/*.scss"], buildCSS);
}

exports.watchCSS = watchCSS;
```

Generating new css will trigger site regeneration
and browser preview updates.

This way, you can simultaneously work on theme templates and styles in
a single process. It's convenient to combine everything into one task:

```javascript
async function wactchAll() {
  watchCSS();
  watchSite();
}

exports.watchAll = watchAll; // gulp watchAll
```
