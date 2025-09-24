---
title: "Pagination"
tags: 
date: "2025.09.24 11:19"
id: 0e9d04c38b03b1285f610f7f89dfee9a
excerpt: " "
name: split_en
---

Pagination can be used directly within content. You can paginate any list, not just a list of pages.

It is important to ensure that pagination is not called twice within the same physical page (i.e., make sure the pagination function is not called in the template of this page, and that it is not called more than once either in the content or in the template).

This feature has been available **since version 0.1.8b**. In previous versions, pagination only worked in templates.

```jinja
{% raw %}
{# The second parameter is the number of list items per page #}
{# It can be omitted — then the value from the configuration file will be used #}
{{ splitToPages(datasets.examples.movies, 10) }}

{# You can do almost anything with the list #}
{{ page.list_page | to_table(["name_en", "director_en"]) }}

{# The template should include pagination output #}
{% endraw %}
```

{{ splitToPages(datasets.examples.movies, 10) }}
{{ page.list_page | to_table(["name_en", "director_en"], ["Title" , "Director"]) }}

