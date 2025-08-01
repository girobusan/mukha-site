---
title: Фильмы
---

Пример генерации страниц из таблицы. Для каждой строки сгенерирована одна страница. Код из [data.config.yaml](/+doc:data_config_ru):

{% raw %}
```yaml
# Сначала делаем колонку, в которой будет строка, подходящая
# для имени файла
- task: slugify
  dataset: examples.movies
  input_col: name_en
  output_col: movie_slug

# Собственно, генерация
- task: render
  dataset: examples.movies
  type: row
  path: /examples/movies/[movie_slug].html
  meta:
    title: "[name_ru]"
    excerpt: "Компания _[company]_, режиссер — [director_ru], [year] год."
  markdown: |-
    - Компания: **[company]**
    - Режиссер: **[director_ru]**
    - Год выхода: [ **[year]** ](/examples/years/[year].html)
    - Рейтинг IMDB: **[rating_IMDB]**
```

{% endraw %}
