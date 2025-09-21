---
title: Page Format
---

Pages are created in Markdown format with a metadata block (frontmatter).
For example, you can look at the source code of almost any page on this site.

For Mukha to generate HTML from Markdown, the page title must be defined in the metadata — the `title` field. The minimal source code looks something like this:

```markdown
---
title: "My Favorite Cat"
---

So, ....
```

You can specify other metadata as well:

```markdown
---
title: "My Favorite Cat"
date: "2025.12.22 13:50"
tags: "photos, cats, what else is the internet for"
keywords: "cat, winter"
---

So, ....
```

Specifying a date is highly recommended, as pages are sorted by date by default. More detailed information about the metadata used by Mukha can be found [here, in the "Metadata" section](/+doc:page_obj_en).

