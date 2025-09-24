---
title: Теги шаблонизатора
name: template_tags_ru
mymeta: test
---

В тексте можно использовать теги шаблонизатора. Например,
чтобы вывести какую-то информацию:

### Метаданные страницы:

Код:

```
{% raw %} **{{ page.meta.title }}** {% endraw %}
```

Результат:

**{{ page.meta.title }}**

### Данные

Код:

```
{% raw %}**Фильмов в таблице: {{ datasets.examples.movies.length }}**{% endraw %}
```

Результат:

**Фильмов в таблице: {{ datasets.examples.movies.length }}**


