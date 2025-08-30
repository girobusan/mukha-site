---
title: Page object
tags: templates, objects
doc: page_obj_en
---

The page object represents a page on the site. The following fields are available in it:

### General

- `content` — raw page content in markdown
- `html` — after processing, text rendered into html (available only in templates).
- `meta` — page metadata (see below)
- `file` — an object, representing a file. Important field — `file.path` contains the path to the page, generated from the file **on the site.**
- `permalink` — link to the page on the site, like the `file.path`, but for paginated content contains link to first page.
- `virtual` — true for virtual pages
- `index` — true if the page is an `index.md` file or any of its subpages
- `list` — field is defined if the main content of the page is a list. For tag pages, this field contains a list of pages marked with the tag.

### These — only for paginated pages:

- `page_count` — after pagination — the number of subpages
- `page_links` — list of links to subpages
- `page_number` — current subpage number, numbering starts from 1
- `list_page` — the part of the paginated list that should be displayed on the current subpage

### Only for pages generated from data:

- `local_data` — if the page was generated from data — the data of this page

## Metadata (page.meta)

Any additional fields can be specified in the metadata,
for example, page or group identifiers.

Here is a list of fields that are used (reserved) by Mukha:

- `title` — title, mandatory field
- `date` — date, entered in the format YYYY.MM.DD HH:SS, replaced with a Date object
- `tags` — list of tags separated by commas, converted into a list of tag pages.
- `image` — image for the page, if not defined, Mukha will try to find the first image in the text
- `excerpt` — excerpt, if not defined, it may be filled with the first paragraph of the text
- `draft` — if true, the file is skipped during processing
