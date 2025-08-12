const { src, dest, watch, series, parallel } = require("gulp");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const purgecss = require("gulp-purgecss");
var uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
var exec = require("child_process").exec;
var spawn = require("child_process").spawn;

async function buildSite(cb) {
  exec("mukha-ssg -o docs -c", { cwd: "." }, (err, out, stderr) => {
    // console.log(out);
    stderr && console.log(stderr);
    err && console.error(err);
    cb();
  });
}
async function buildCSS() {
  return src("scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("site/config/themes/basic/assets/"))
    .pipe(sourcemaps.write("."));
  //.pipe(dest("css/"));
}

async function productionCSS() {
  return src("src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(purgecss({ content: ["static/**/*.html"] }))
    .pipe(sass({ style: "compressed" }).on("error", sass.logError))
    .pipe(dest("src/site/config/themes/basic/assets/"));
}

async function watchCSS() {
  return watch(["scss/*.scss"], buildCSS);
}

async function watchSite() {
  spawn("mukha-ssg", ["-w"]);
}

async function editSite() {
  spawn("mukha-ssg", ["-wc", "-o", "docs"]);
}

async function watchAll() {
  watchCSS();
  watchSite();
}

exports.watchCSS = watchCSS;
exports.watchSite = watchSite;
exports.css = buildCSS;
exports.buildSite = buildSite;
exports.watchAll = watchAll;
exports.prodCSS = productionCSS;
exports.editSite = editSite;
