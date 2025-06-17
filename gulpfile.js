const { src, dest, watch, series } = require("gulp");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
var exec = require("child_process").exec;

async function buildSite(cb) {
  exec("node mukha.js", { cwd: "src" }, (err, out, stderr) => {
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
    .pipe(sourcemaps.write("."))
    //.pipe(dest("css/"));
}

async function watchCSS() {
  return watch(["src/scss/*.scss", "src/site/config"], buildCSS);
}

exports.watchCSS = watchCSS;
exports.css = buildCSS;
exports.buildSite = buildSite;
