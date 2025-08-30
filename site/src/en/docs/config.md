---
title: Site Configuration File
doc: config_file_en
lang: en
---

The file is located in the `site_dir/config/site.yaml` folder

```yaml
# About the site
title: "Example site"

# Short "motto"
motto: "Proud to be default"

# Image, will be displayed
# when linking to the site and in feeds.
image: /path/to/image/ext

# Site description, displayed
# in feeds.
description: |-
  Long description
  of the site

# Author
author: "Incognito"

# Site URL. Should not end with "/"
# If the site is located in a subdirectory,
# it must be included in the URL.
url: "https://example.site"

# Theme name. Won't run without a theme.
theme: theme_name

# How many list items
# should be on one page by default when splitting
# a list into pages.
list_length: 20

# Path to the directory where tag files will be stored.
tags_dir: "/tags"

# If this option is defined and the specified file
# is present on the site, the `list` property of this file
# will be populated with a list of tags, sorted alphabetically.
tags_page: "/tags/index.html"

# RSS and Atom
rss_uri: "/rss.xml"
atom_uri: "/atom.xml"

# Maximum number of articles
# in feeds.
feed_length: 30

# Editor invocation command (see "Preview Mode")
edit_cmd: code

# Enable (or disable) JS API
js_api: true

# Enable built-in search
search: true

# Save and display article excerpts
# in search results
keep_excerpts: true

# Index content in languages,
# must be an array, even if there's only one language!
# For one language: search_lang: ["ru"]
# For search only in English, the language can be omitted
search_lang: ["ru", "en"]
