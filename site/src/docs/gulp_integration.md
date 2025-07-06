---
title: Интеграция с gulp
tags: Рецепты
---

Муха легко интегрируется в процесс разработки с gulp, предоставляя быстрый
предпросмотр сайта в браузре и позволяя объединить разработку
css и шаблонов сайта в единый процесс.

При наличии Мухи не нужны расширения типа Browsersync, так как она содержит встроенный
режим предварительного просмотра, в котором не пишет никаких файлов на диск, что удобно
и экологично.

В приведенном примере предполагается, что директория сайта находится на
верхнем уровне директории проекта, и там же — директория с
файлами scss.

Вот так можно прописать задачу gulp:

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

Далее эту задачу можно запускать обычным `gulp watchSite`.  При этом,
так как Муха отслеживает все изменения в каталоге сайта, можно одновременно
запустить задачу, которая будет следить за изменениями в css и сохранять обновленные
файлы темы:

```javascript
const sass = require("gulp-sass")(require("sass"));

// эта задача генерирует css и сохраняет его
// в папку темы сайта.
async function buildCSS() {
  return src("scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("site/config/themes/basic/assets/"));
}

// а эта следит за изменениями в исходных файлах
// и запускает генерацию по необходимости
async function watchCSS() {
  return watch(["scss/*.scss"], buildCSS);
}

exports.watchCSS = watchCSS;
```

Генерация нового css будет вызывать перегенерацию сайта
и обновление предварительного просмотра в браузере.

Так можно одновременно работать над шаблонами темы и стилем в
едином процессе. Удобно объединить все в одну задачу:

```javascript
async function wactchAll() {
  watchCSS();
  watchSite();
}

exports.watchAll = watchAll; // gulp watchAll
```
