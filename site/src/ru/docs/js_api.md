---
title: Java Script API
excerpt: API для пользовательских скриптов
doc: jsapi_ru
---

Для прозрачной работы с данными на клиенте, и более эффективной
разработки пользовательских скриптов Муха позволяет подключить  простое API  для
Java Script. 

---

API работает независимо от расположения сайта, например, данные загружаются
как при открытии страниц по сети, так и локально (по протоколу file://).Для его подключения нужно:

- В шаблоне, _как можно ближе к началу HTML_, разместить тег {% raw %}`{{ jsapi }}`{% endraw %}
- В [конфигурационном файле](/+doc:config_file_ru) добавить опцию `js_api: true`

При подключенном API становится доступен объект `window.Mukha`. Ниже список его полей.

###  Доступные поля

{% for unit in data.datasets.api.jsapi %}
<div class="mb-6">
<strong>
{{ unit.field }}{% if unit.isFunction %}(
{% if unit.params %}
{% for P in unit.params %}
{{ P[0] }}{% if not loop.last %} , {% endif %}
{% endfor %}
{% endif %} )
{% endif %}
</strong>
<div>{{ unit.description}} </div>
{% if unit.params %}
<table>
<thead>
<tr>
<td>Параметр</td>
<td>Тип</td>
<td>Что это</td>
</tr>
</thead>
<tbody>
{% for row in unit.params %}
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
