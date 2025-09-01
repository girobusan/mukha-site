---
title: "Changing the Theme"
tags:
date: "2025.09.1 11:34"
id: 48cae17a2cc742da624be2443be68233
---

The site comes with a very simple default theme by default; you can play around with it, but it's not meant for long-term use. Let's download and install a more interesting theme, _notepad_.

## Download the Theme

All versions of the theme can be downloaded from the releases section of the base site repository, here:

- [https://github.com/girobusan/mukha-basic-site/releases/](https://github.com/girobusan/mukha-basic-site/releases/)

Click on the latest release and download the file named like `notepad_theme.<version>.dist.zip`.

## Create a Directory

In your site's folder, find the subfolder `config/themes`. Inside it, create a folder named `notepad` and extract the contents of the downloaded archive into it. You should end up with two folders: `templates` and `assets` there. The final folder structure should look like this:

```yaml
site
   |
   config
        |
        themes
              |
              bland     ← default theme
              |
              notepad
                    |
                    templates
                    assets
```

## Site Configuration

Open the [configuration file](/+doc:config_file_en) `site/config/site.yaml`, find the line:

```yaml
theme: bland
```

And change it to:

```yaml
theme: notepad
```

Now you can run Mukha in preview mode or generate static files — the new theme should be applied.

## If something went wrong

- Check the directory names; they might be case-sensitive (on Mac and Linux).
- Read the error messages (it's better to run static generation for this, as some errors are not displayed in preview mode).

