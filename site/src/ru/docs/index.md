---
title: Документация
excerpt: Docs
menuitem: 2
hide_list: true
---

{% for unit in datasets.contents %}

<h2>{{ unit.title.ru }}</h2>
<ul>
{% for P in unit.pages %}
{% set PPath = "/ru/docs/" + P.replace(".md" , ".html") %}
{% set PG = list.getByPath(PPath) %}
{% if PG %}
<li><a href="{{PPath}}">{{PG.meta.title}}</a></li>
{% else %}
<li style="color: silver">{{P}}</li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}
