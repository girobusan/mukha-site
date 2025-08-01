---
title: Table
name: movies_table_en
excerpt: |-
  This is the table used for
  generations.
---

Table used for generations in [examples](/+name:examples_intro_en).
Horizontal scroll is possible, see below. The table is rendered
directly from the data, so it shows columns added during processing.
To display tables, it's convenient to [use the `to_table` filter](/+doc:to_table_flt_en)..



<small class="wide_table">
{{ datasets.examples.movies | to_table }}
</small>
