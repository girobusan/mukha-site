---
title: Filter to_table 
doc: to_table_flt_en
excerpt: |-
  The `to_table` filter is used to display tabular data as formatted tables, 
  optionally with specified columns.
---

{% raw %}

```jinja
{{ data.dataset.myTable | to_table }}  
```
{% endraw %}

The filter accepts an additional parameter—a list of columns to display. For example, you can output only a subset of columns from this table to fit them on the page:

{% raw %}
```jinja
{{ data.datasets.examples.movies | to_table(["name_en","director_en"]) }}  
```
{% endraw %}

The result will look like this:

{{ data.datasets.examples.movies | to_table(["name_en","director_en"]) }}
