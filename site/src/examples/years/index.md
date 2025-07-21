---
title: Фильмы по годам
doc: generation_col_ru
---

Для каждого значения года сгенерирована страница со списком фильмов
за этот год. Число фильмов за год добавлено _агрегацией_. Код из [data.config.yaml](/+doc:data_config_ru):
{% raw %}
```yaml
# Считаем количество фильмов за год
- task: aggregate
  dataset: examples.movies
  type: count_u
  group_by: year
  input_col: name_en
  output_col: movies_year

# Генерируем страницы
- task: render
  dataset: examples.movies
  type: col
  col: year
  path: /examples/years/[year].html
  meta:
    title: "[year]"
    excerpt: "Вышло фильмов: [movies_year]"
  markdown: |-
    {% for row in page.local_data %}
    - {{row.company}} : [{{ row.name_ru }}](/examples/movies/{{row.movie_slug}}.html)
    {% endfor %}
```
{% endraw %}
