---
title: "Links"
tags: 
date: "2025.07.21 18:48"
id: c18ce128da9181719b1d4c2924a6d1f4
---

In function arguments, metadata, and texts, Mukha recognizes root-relative links to documents on the site:

```html
/path/to/file.html
```

Such links will be replaced with relative ones during post-processing. Links in other formats are not recognized. Don't forget the leading slash!

## "Smart" Links

In texts, you can also use "smart" links — to reference a document not by its location on the site, but by the value of its metadata. For example:

```markdown
[Link](/+id:1001)
```
This is a link to a document whose metadata contains something like:

```yaml
---
title: One thousand one
id: 1001
---
```

It starts with `/+`, followed by the metadata field name and after the colon **without a space** — the value. During HTML post-processing, Mukha will search for a file with this field/value combination, and if found, the link will be replaced with the actual one.

