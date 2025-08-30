---
title: "About the project"
tags: 
date: "2025.07.21 9:31"
id: 42259f253bafa002778f8975e4b46d61
---

Mukha is _yet another_ opinionated static site generator.

## Simplicity

- Does not depend on external tools, only Node.js is needed.
- Consists of a single file, which can be placed in the site repository if desired.

## Blogging tools

- Tags. Tag pages are generated automatically and/or manually.
- Integrated [full-text search](/+doc:search_en).
- Source texts of pages are in markdown with additions (≈GFM).
- Arbitrary page metadata and tools for their use.

## Portability

- All links within the site are relative. The site works even if you just open a page in the browser, i.e., without a server, including search.
- [Java Script API](/+doc:jsapi_en) allows using relative addressing in custom scripts.
- "Smart links" - syntax that allows forming a link to a page that will not depend on its location on the site.

## Design and development

- Preview with auto-update in the browser, integration with _your favorite_ editor for quick editing/adding pages.
- Uses the Nunjucks templating engine, templating functions can also be used in page content, for example, to display data (below).
- Separation of content and design. There is no need to explicitly specify a template for each page (and it is generally an anti-pattern).
- [List generator](/+doc:lister_en) allows avoiding explicit editing of navigation elements in most cases.
- Multi-page lists, pagination widget generator.
- Mukha easily integrates with (almost) any development tools.

## Data

- Data is full-fledged content. All data files placed in the data directory are available during generation.
- Basic processing functions for tabular data - aggregation, column removal, slug generation, etc.
- Data can be used in templates and in content.
- Pages can be generated from data using a simple, [declarative syntax](/+doc:generation_col_en).
- Java Script API allows "attaching" data to the site for further use in custom scripts.

## Considerations

- The site structure is mainly determined by the structure of the source file directories.
- Currently, there are no functions for image processing; images are copied to the site as is.
- The plugin API is in the early stages of development.
