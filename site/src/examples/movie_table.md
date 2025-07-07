---
title: Табличка
name: movies_table_ru
excerpt: |-
  Тут табличка, из которой сделаны
  генерации.
---

Таблица, из которой сделаны генерации в [ примерах ](/+name:examples_intro_ru).
Возможен горизонтальный скролл, см. внизу. Табличка выведена
непосредственно из данных, так что в ней видны столбцы, добавленные
при обработке. Для вывода таблицы удобно [использовать фильтр](/+doc:to_table_flt_ru) `to_table`,
в который можно передать любые табличные данные для преобразования
в html-таблицу.

{% raw %}

```jinja
{# вот так: #}
{{ data.datasets.examples.movies | to_table}}
```

{% endraw %}

<small class="wide_table">
{{ data.datasets.examples.movies | to_table }}
</small>
