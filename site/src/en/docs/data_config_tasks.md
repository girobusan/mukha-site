---
title: Data Processing
doc: data_config_en
---

Sometimes you may need not just to connect data to your site, but also process it and/or generate pages from it. This is optional but possible.

----

The configuration file `data.config.yaml` (or `data.config.json`) defines how data will be processed before being connected to the site. It also configures page generation from data.

The file is written in `yaml` or `json` format. It consists of a list of data operations (array of objects). All actions described in the file are performed sequentially, except for page generation - pages are generated strictly after all other actions are completed.

Each action has mandatory parameters `dataset` and `task`. Below is the general scheme, all examples here and below are in `yaml` format.

```yaml
- task: <action name>
  dataset: <dataset name>
  ... other parameters may vary depending on the action
```

Actions can only be performed on tabular data, i.e. data that can be represented as a table. The number of actions is limited only by common sense.

Non-tabular data can be used on pages, inserted into templates, but cannot be processed.

## Data Actions

### slugify

Creates a new column based on the selected one, where each value from the selected column corresponds to a unique string consisting of Latin alphabet letters, numbers and underscores. This function is needed for creating pages - its result can always be used as part of a URL.

For example, if you have a table with actor names and you need to create a page for each of them, you can use slugify to add a column that will later be used as a filename when generating pages:
```yaml

- task: slugify
  dataset: tables.movies
  input_col: actor_name
  output_col: actor_page_name
```

Parameters:

- `input_col` - column based on which the new column will be created
- `output_col` - name of the new column


### hash **(0.1.4)**

Creates a new column based on the selected one, containing the hash of the selected column’s content.
Useful when you need to use values that are too long in a URL. By default, a hash is generated 
using the sha-256 algorithm with a length of 43 characters. When the `short` option is enabled, 
a shortened 22-character hash is generated. 

```yaml
- task: hash
  dataset: tables.movies
  short: true
  input_col: very_long_name
  output_col: name_hash
````

#### Parameters:

* `input_col` — the column from which the new column will be created
* `output_col` — the name of the new column
* `short` — use a shorter hash



### combine **(0.1.4)**

Creates a new column based on several selected ones. The contents of the selected columns are concatenated and hashed.

This is necessary if you need to generate a more complex page structure. For example, for a list of movies,
you might want to create a subsection for each director, and within it, pages for all the actors who worked with them.
In this case, you need to combine the values of two columns and generate pages based on the contents of the new column —
it will contain all unique director/actor combinations.

By default, a 43-character hash is generated. When the `short` option is enabled,
a shortened hash is generated.

```yaml
- task: combine
  dataset: tables.movies
  short: false
  input_cols:
    - actor_name
    - director_name
  output_col: director_actor
```

#### Parameters:

* `input_cols` — the list of columns from which the new column will be created
* `output_col` — the name of the new column
* `short` — use a shorter hash

```



### sort

Sorts the dataset by the specified column.
Parameters:

- `col` - column to sort by
- `as_number` - boolean value - whether to interpret column content as a number. The result may be unexpected (for now) as locale is not taken into account.
- `desc` - boolean value, sort in descending order.

### del_cols

Deletes columns from the table. Useful when you want to save the table for JavaScript, to avoid saving and downloading unnecessary data.

- `cols` - list of column names to delete

```yaml

- task: del_cols
  dataset: examples.movies
  cols: ["minutes_long", "budget", "rating_metacritic"]
```
### aggregate

Warning: it's better to prepare data in advance using more suitable tools! The aggregate action allows simple aggregations - sum, count, median. For example, this can be used to add to a table listing actors and movies they starred in, the number of movies each actor appeared in:

```yaml

- task: aggregate
  dataset: table.actors
  type: count_u
  col: movie_name
  group_by: actor_name # Optional parameter.
  output_col: filmed_in
```

#### Parameters:

- `type` - aggregation type: count, count_u, sum, average, median
- `col` - column where aggregation will be performed
- `group_by` - optional, column by which values will be grouped
- `output_col` - name of the new column where results will be stored

## Page Generation

The **render** action generates pages from tabular data. Render actions are executed after all others.

Two main generation types are defined by the type parameter (see below). Other parameters determine the location and content of generated pages.

- `path` - Full address of the generated page
- `meta` - Metadata, any fields can be filled
-  `markdown` or `html` - Page content can be generated either in markdown or directly in html (in the latter case the text won't be processed by markdown parser). Template tags will be processed in any case.

Column values from the processed dataset can be inserted into property values using simple substitution syntax:

```yaml

  task: render
  dataset: examples.movies
  type: row
  # Filename will be generated from movie_slug column
  path: /examples/movies/[movie_slug].html
  meta:
  # Page title = name field
    title: "[name]"
```

### type: row

The simplest: pages are generated for each table row. The generated page's `local_data` field will contain a single-row table.

### type: col

Pages are generated for each unique value in the specified column. In the generated page, the `local_data` field will contain a table subset during generation - all rows where the selected column's value is the same.

This data can be iterated through using template tags, and/or saved for use in client scripts via JavaScript API.
