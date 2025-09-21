---
title: "Сокращенный синтаксис конфигурационного файла данных"
tags: 
date: "2025.09.21 10:45"
id: 940ef186e4f41a0c5bd9ed872fe2bce2
doc: data_conf_short_ru
---

Для удобства и краткости некоторые записи конфигурационного файла данных можно сокращать.

---



## Сокращение частых терминов

Ключи `task` и `dataset` можно сокращать до `T` и `D` соответственно.

```yaml

- task: slugify
  dataset: tables.movies
  input_col: name
  output_col: slug
  
# можно так:

- T: slugify
  D: tables.movies
  input_col: name
  output_col: slug 

```

Если в нескольких операциях, описанных подряд, используется один датасет, ключ `dataset` можно полностью пропустить, в процессе обработки будет подставлен последний упомянутый датасет:

```yaml

- T: slugify
  D: tables.movies
  input_col: name
  output_col: slug 
  
- T: idfy  # будет использован датасет tables.movies
  input_col: description

```

## Короткая запись для render и aggregate

Для операций `render` и  `aggregate` вместо двух ключей — `task` и `type` можно использовать сокращенную запись:

```yaml

# вместо:

- task: render
  dataset: examples.movies
  type: row
  path: /examples/movies/[movie_slug].html
  meta:
    title: "[name]"
    
# можно:

- render: row
  dataset: examples.movies
  path: /examples/movies/[movie_slug].html
  meta:
    title: "[name]"
    
# или еще короче:  

- R: row
  D: examples.movies
  path: /examples/movies/[movie_slug].html
  meta:
    title: "[name]"
    
```
Для aggregate:

```yaml
# вместо

- task: aggregate
  type: count_u
  dataset: table.actors
  col: movie_name
  output_col: filmed_in
  
# можно 

- aggregate: count_u
  dataset: table.actors
  col: movie_name
  output_col: filmed_in
  
# или

- A: count_u
  D: table.actors
  col: movie_name
  output_col: filmed_in
  
```

## Смена «текущего» датасета

Для наглядности записи можно определять датасет для последующих операций отдельным пунктом:

```yaml

- D: table.actors

- A: count_u
  col: movie_name
  output_col: filmed_in

- T: idfy  
  input_col: description



```



