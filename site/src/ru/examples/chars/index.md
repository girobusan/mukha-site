---
title: "Генерация по ключу"
tags: 
date: "2025.08.15 17:09"
id: 1574fe2b00951f2eabf2760efdc6c2c4
---

Генерация страниц из набора файлов JSON.

{% raw %}
```yaml
- task: render
  type: key
  # директория  site/data/keys/
  dataset: keys 
  # [key] — единственный символ для замены
  # при таком способе генерации
  path: /ru/examples/chars/[key].html
  meta:
    title: "Ice And Fire, [key]"
  markdown: |-
    {{ page.local_data.name}}
    ========================

    - Gender: **{{page.local_data.gender}}**
    - API URL: **{{page.local_data.url}}**
```
{% endraw %}
