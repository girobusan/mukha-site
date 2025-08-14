---
title: "Characters"
tags: 
date: "2025.08.14 14:23"
id: bf28da28410a9250fc5e9ed322cd02dc
---

Pages, generated from the set of JSON files.

{% raw %}
```yaml
- task: render
  type: key
  dataset: keys
  # [key] is the only available substitution symbol
  # whith this type of generation
  path: /en/examples/chars/[key].html
  meta:
    title: "Ice And Fire, [key]"
  markdown: |-
    {{ page.local_data.name}}
    ========================

    - Gender: **{{page.local_data.gender}}**
    - API URL: **{{page.local_data.url}}**
```
{% endraw %}
