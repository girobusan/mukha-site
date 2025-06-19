const { src, dest, watch, series, parallel } = require("gulp");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
var exec = require("child_process").exec;

async function buildSite(cb) {
  exec("mukha-ssg", { cwd: "src" }, (err, out, stderr) => {
    // console.log(out);
    stderr && console.log(stderr);
    err && console.error(err);
    cb();
  });
}
async function buildCSS() {
  return src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("src/site/config/themes/basic/assets/"))
    .pipe(sourcemaps.write("."));
  //.pipe(dest("css/"));
}

async function productionCSS() {
  return src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ style: "compressed" }).on("error", sass.logError))
    .pipe(dest("src/site/config/themes/basic/assets/"));
}

async function watchCSS() {
  return watch(["src/scss/*.scss"], buildCSS);
}

async function watchSite() {
  return watch(["src/site/"], { delay: 500 }, buildSite);
}

async function watchAll() {
  return parallel(watchCSS, watchSite);
}

exports.watchCSS = watchCSS;
exports.watchSite = watchSite;
exports.css = buildCSS;
exports.buildSite = buildSite;
exports.watchAll = watchAll;
exports.prodCSS = productionCSS;
