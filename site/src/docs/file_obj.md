---
title: Объект file
doc: file_obj_ru
tags: Объекты
---

Объект используется внутри генератора. Содержит поля:

{% set ft=data.datasets.api.file %}

<ul>
  {% for fl in ft %}
<li><code>{{ fl.field }}</code> — {{ fl.note }}</li> 
  {% endfor %}
</ul>
