---
title: Объект lister
doc: lister_ru
tags: объекты
---

Объект lister — _похожий на массив_ (array-like) объект, предназначенный
для хранения и обработки списков [страниц ](/+doc:page_obj_ru). Такой объект доступен в переменной
шаблона `list`:

{% raw %}

```html
<ul class="menu">
  {% for item in list.getNearFiles("/blog/index.html") %}
  <li><a href="{{ item.file.path }}">{{ item.meta.title }}</a></li>
  {% endfor %}
</ul>
```

{% endraw %}

## Поля и методы

{% for fl in data.datasets.api.lister %}

<div class="mb-4">
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
<div>Параметры: {{ fl.params or "нет"}}</div>
{% endif %}
<div>{{fl.description}}</div>
{% if fl.params_desc %}
<table>
<thead>
<tr>
<td>Параметр</td>
<td>Тип</td>
<td>Зачем</td>
</tr>
</thead>
<tbody>
{% for row in fl.params_desc %}
<tr>
<td><code>{{row[0]}}</code></td>
<td>{{row[1]}}</td>
<td>{{row[2]}}</td>
</tr>
{% endfor %}
</tbody></table>
{% endif %}
</div>
{% endfor %}
