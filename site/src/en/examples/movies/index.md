---
title: Movies
---

Example of page generation from a table. One page is generated for each row. Code from [data.config.yaml](/+doc:data_config_en):

{% raw %}
```yaml
# First create a column with a string suitable for filename
- task: slugify
  dataset: examples.movies
  input_col: name_en
  output_col: movie_slug

# Actual generation
- task: render
  dataset: examples.movies
  type: row
  path: /examples/movies/[movie_slug].html
  meta:
    title: "[name_ru]"
    excerpt: "Company _[company]_, director — [director_en], year [year]."
  markdown: |-
    - Company: **[company]**
    - Director: **[director_en]**
    - Release year: [ **[year]** ](/examples/years/[year].html)
    - IMDB Rating: **[rating_IMDB]**
```

{% endraw %}
