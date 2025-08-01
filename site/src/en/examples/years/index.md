---
title: Movies by Year
doc: generation_col_en
---

A page is generated for each year, listing all movies released in that year. The movie count per year is added via _aggregation_. Code from [data.config.yaml](/+doc:data_config_en):

{% raw %}
```yaml
# Count movies per year
- task: aggregate
  dataset: examples.movies
  type: count_u
  group_by: year
  input_col: name_en
  output_col: movies_year

# Generate pages
- task: render
  dataset: examples.movies
  type: col
  col: year
  path: /examples/years/[year].html
  meta:
    title: "[year]"
    excerpt: "Movies released: [movies_year]"
  markdown: |-
    {% for row in page.local_data %}
    - {{row.company}} : [{{ row.name_en }}](/examples/movies/{{row.movie_slug}}.html)
    {% endfor %}
```
 {% endraw %}
