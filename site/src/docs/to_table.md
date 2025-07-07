---
title: Фильтр to_table
doc: to_table_flt_ru
---

Кроме [ стандартных фильтров Nunjucks ](https://mozilla.github.io/nunjucks/templating.html#builtin-filters), в Мухе доступен фильтр,
выводящий табличный набор данных в виде таблицы. В самом простом
варианте используется так:

{% raw %}

```
{{ data.dataset.myTable | to_table }}
```

{% endraw %}

 Фильтр принимает дополнительный параметр — список колонок, которые
надо вывести. Например, можно вывести из [ этой таблички ](/+name:movies_table_ru) только часть столбцов,
чтобы уместить на странице:
{% raw %}

```
{{ data.datasets.examples.movies | to_table(["name_en","director_en"]) }}
```

{% endraw %}

Получится так:

{{ data.datasets.examples.movies | to_table(["name_en","director_en"]) }}
