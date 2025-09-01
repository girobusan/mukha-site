---
title: Site Directory Structure
doc: site_dir_en
excerpt: What goes where and why
lang: en
---

<pre class="mermaid">
graph TB
    A[site] --- B[config]
    A --- C[data] --- K(["data.config.yaml (optional)"])
    C --- C1@{shape: procs , label: "json, yaml, csv..."}
    A --- D[src]
    A --- E[assets]
    A --- M[hooks]
    B --- F(["site.yaml (required)"])
    %%F --- |Site configuration file| F
    B --- G[themes]
    G --- H[theme_name1]
    G --- I[theme_name2]
    G --- J[...]
    H --- L[templates]
    H --- L1[assets]
</pre>

## site/config/

This directory contains the [configuration file](/+doc:config_file_en) and theme files.

## site/data/

Directory for connected data. All `csv` and `json` files from this folder will be available during site generation. The optional file `data.config.yaml` or `data.config.json` is intended for describing the [operations](/+doc:data_config_en) that will be performed on the data, including parameters for generating pages from data.

## site/src/

Files from this folder will be processed during site generation. Markdown files will generate pages, other files will be copied to the output directory.

## site/assets/

All files from this folder will be copied to the output directory without processing. A convenient place for the .nojekyll file :)

## site/hooks

Directory for [hooks](/+doc:hooks_en)
