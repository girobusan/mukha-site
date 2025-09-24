---
title: Template Tags
name: template_tags_en
mymeta: test
---

You can use template tags in the text. For example,
to display some information:

#### Page metadata:

Code:

```
{% raw %} {{ page.meta.title }} {% endraw %}
```

Result:

**{{ page.meta.title }}**

### Data

Code:

```
{% raw %}**Movies in the table: {{ datasets.examples.movies.length }}**{% endraw %}
```

Result:

**Movies in the table: {{ datasets.examples.movies.length }}**
