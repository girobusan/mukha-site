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

 Фильтр принимает дополнительные параметр — список колонок, которые
надо вывести и список заголовков (заголовки — с версии 0.1.8b, см. внизу). Например, можно вывести из [ этой таблички ](/+name:movies_table_ru) только часть столбцов,
чтобы уместить на странице:
{% raw %}

```
{{ data.datasets.examples.movies | to_table(["name_ru","director_ru"]) }}
```

{% endraw %}

Получится так:

<small>{{ data.datasets.examples.movies | to_table(["name_ru","director_ru"]) }}</small>

А можно «переименовать» колонки:

{% raw %}

```
{{ data.datasets.examples.movies | to_table(["name_ru","director_ru"] , ["Название" , "Режиссер"]) }}
```

{% endraw %}

<small>{{ data.datasets.examples.movies | to_table(["name_ru","director_ru"] , ["Название" , "Режиссер"]) }}</small>


