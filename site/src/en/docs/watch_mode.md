---
title: Preview Mode
tags: 
date: "2025.07.30 18:46"
id: 8e6e003e61b384e59791f09abbd5e4e3
doc: watch_mode_en
---

Preview mode allows you to track changes made to the site in real time.
Convenient to use when [integrating with gulp](/+doc:gulp_en).

---

To enable preview mode, you need to run Mukha with the `-w` (`--watch`) parameter:

```shell
mukha-ssg -w
```
Mukha will generate the site and attempt to open the main page in the default browser. When changes are made
to the source files, the site will be dynamically regenerated. During preview display,
no files are written to disk, so after finishing, you will need to generate a new
version with a separate command.

## Automatic generation after preview is completed

If the output directory was explicitly specified when starting Mukha in preview mode, then
after finishing, the changes made will be saved to disk.

```bash
mukha-ssg -o static -w
```
The `-w` key combines well, but amusingly, with the `-c` key (`--cleanup`, removing unnecessary files from the output directory after generation).

```shell
mukha-ssg -o static -wc
```

## Editor integration

If the `edit_cmd` option (text editor name) is set in the site configuration file, then a panel with buttons will appear at the bottom right
on all pages available for editing:

```@image
url: /px/watch_mode_buttons_2.png
classes:
  - noresize
```

- `edit` — opens the current page in the text editor.
- `new page` (or `+page`) — creates a new page in the current *directory*.
- `new dir` (or `+dir`) — creates a new directory in the current *directory* and an index.md file in it.
- `del` — deletes the current page.

Currently, the `edit_cmd` option must contain a single "word" — the editor launch command; the filename will be passed
to the specified command as the sole parameter.

