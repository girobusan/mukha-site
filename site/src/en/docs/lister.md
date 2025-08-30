---
title: Lister object
doc: lister_en
tags: objects
---

The lister object is an _array-like_ object designed
for storing and processing lists of [pages](/+doc:page_obj_en).

It is available in the template variable
`list`:

{% raw %}

```html
<ul class="menu">
  {% for item in list.getNearFiles("/blog/index.html") %}
  <li><a href="{{ item.file.path }}">{{ item.meta.title }}</a></li>
  {% endfor %}
</ul>
```

{% endraw %}

## Fields and methods

{% for fl in data.datasets.api.lister %}

<div class="mb-6">
<strong>{{fl.method}}
    {% if not fl.notfn %}(
    {% if fl.params_desc %}
    {% for pr in fl.params_desc %}
    {{ pr[0] }}{% if not loop.last %},{% endif %}
    {% endfor %}
    {% endif %} )
    {% endif %}
  </strong>
{% if not fl.params_desc %}
<div>Parameters: {{ fl.params or "none"}}</div>
{% endif %}
<div>{{fl.description_en}}</div>
{% if fl.params_desc %}
<table>
<thead>
<tr>
<td>Parameter</td>
<td>Type</td>
<td>Purpose</td>
</tr>
</thead>
<tbody>
{% for row in fl.params_desc %}
<tr>
<td><code>{{row[0]}}</code></td>
<td>{{row[1]}}</td>
<td>{{row[3]}}</td>
</tr>
{% endfor %}
</tbody></table>
{% endif %}
</div>
{% endfor %}

